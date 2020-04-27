import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { BookContext } from "../Context";
import StyledHero from "../components/StyledHero";
import { FaShekelSign } from "react-icons/fa";
import Carousel, { dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import axios from "axios";
import StripeCheckOut from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

//paypal

export default class SingleBook extends Component {
  constructor(props) {
    super(props);

    this.state = { slug: this.props.match.params.slug};
  }
  static contextType = BookContext;
  render() {
    const { getBook } = this.context;
    const Book = getBook(this.state.slug);
    const product = {
      price: 777.77,
      name: "comfy chair",
      description: "fancy chair, like new",
    };
    if (!Book) {
      return (
        <div className="error">
          <h3>no such Book could be found</h3>
          <Link to="/books" className="btn-primary">
            back to books
          </Link>
        </div>
      );
    }
    const { name, price, description, images, author, illustrator } = Book;
    const [mainImg, ...defaultImages] = images;

    ///for Email

    async function handleToken(token, adresses) {
      console.log({ token, adresses });
      const response = await axios.post("http://localhost:4000/checkout", {
        token,
        Book,
      });
      const { status } = response.data;
      if (status === "success") {
        toast("Success! Check Email for details", { type: "success" });
      } else {
        toast("Something went wrong", { type: "error" });
      }
    }

    return (
      <>
        <StyledHero img={mainImg || images[1]}>
          <Banner title={`${name} book`}>
            <Link to="/books" className="btn-primary">
              back to books
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-book">
          <div className="single-book-info">
            <article className="desc">
              <h3>summary</h3>
              <p>{description}</p>
              <br />
              <h3>details</h3>
              <p>This book is really recommend for a bla bal bal </p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>
                <b>Price:</b> {Book.price}
                <FaShekelSign size={12} />
              </h6>
              <h6>
                <b>author:</b>
                {author}
              </h6>
              <h6><b>Illustrator:</b>{illustrator}</h6>
              <h6><b>Number of pages:</b> will add on contentful</h6>
              <h6><b>For ages:</b>3-5</h6>
              <form>
                <input type="text" placeholder="kids name?" />
                <input type="number" placeholder="kids age?" />
                <button type="submit">Submit</button>
              </form>

              <StripeCheckOut
                stripeKey={"pk_test_XOHmYUqg6YBHVqxEbAbywNoN00ft2v1fLy"}
                token={handleToken}
                billingAddress
                shippingAdress
                currency={"ils"}
                amount={price * 100}
              />
            </article>
          </div>
          <div className="single-book-images">
            <Carousel
              dots={true}
              autoPlay={3500}
              animationSpeed={1750}
              infinite
            >
              {images.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))}
            </Carousel>
          </div>
        </section>
      </>
    );
  }
}
