const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_qFKUWbt40exa1QJT75xZ62D30054nvHs4L");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());
app.use(cors());

function sendEmailToCostumer(
  email,
  costumername,
  bookname,
  price,
  shippingaddress,
  shippingcity,
  shippingcountry
) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "avivcohenspringbooks@gmail.com",
      pass: "25nzh5TH",
    },
  });

  var mailOptions = {
    from: "avivcohenspringbooks@gmail.com",
    to: email,
    subject: "Purchase succeess from SpringBooks",
    text: `Hi ${costumername} you have Purchased ${bookname} for the price of ${price} shekels.
    thank you for chooseing SpringBooks.
    your book will arrive in 5 working days to the address: ${shippingaddress},${shippingcity},${shippingcountry}
    for any question please call 052-6930-720.
    you will get the reciept soon.
    Aviv.`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function sendEmailToPrintery(
  costumername,
  shippingaddress,
  shippingcity,
  shippingcountry,
  bookname,
  
) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "avivcohenspringbooks@gmail.com",
      pass: "25nzh5TH",
    },
  });

  var mailOptions = {
    from: "avivcohenspringbooks@gmail.com",
    to: "avivcohen93@gmail.com",
    subject: "new book order from SpringBooks",
    text: `costumer name:${costumername}
           costumer adress:${shippingaddress} ,
           ${shippingcity} ,
           ${shippingcountry},
           Book name:${bookname}
           kids name:
           kids age: 
           `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { Book, token } = req.body;
    

    let detailsForPrinteryEmail = [
      token.card.name,
      token.card.address_line1,
      token.card.address_city,
      token.card.address_country,
      Book.name,
      Book.price,
      

    ]
    let detailsForCostumerEmail = [
      token.email,
      token.card.name,
      Book.name,
      Book.price,
      token.card.address_line1,
      token.card.address_city,
      token.card.address_country,
    ];

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        
        
        amount: Book.price * 100,
        currency: "ils",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${Book.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
    sendEmailToCostumer(...detailsForCostumerEmail);
    sendEmailToPrintery(...detailsForPrinteryEmail)
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});
console.log("we are on port 4000");
app.listen(4000);
