import React, { Component } from "react";
import Title from "./Title";
import { FaShippingFast, FaBaby, FaBook } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaShippingFast />,
        title: "Fast Shipping",
        info:
          "we are using the most efficient shipping company in the country will give bla bla with 5 days",
      },
      {
        icon: <FaBaby />,
        title: "Baby shark",
        info:
          "tu tu tu tu tu tu baby shark. mommy shark pupupupupupup momy shark pupupupupupupup",
      },
      {
        icon: <FaBook />,
        title: "All aged Books",
        info:
          "we are offering books for everyone. from 0-99 years old. our books diveres to blalalaal adventure comedy educational blalla",
      },
      {
        icon: <MdPayment />,
        title: "Secured Payment",
        info:
          "with Paypal Credit card Whatever you like even cash from monopoly is accepted",
      },
    ],

  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
            {this.state.services.map((item,index) => {
                return <article key={index} className="service" >
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
