import React, { Component } from "react";
import defaultBCG from "../images/bcg.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { BookContext } from "../Context";
import StyledHero from "../components/StyledHero";
import { FaShoppingCart } from "react-icons/fa";

export default class SingleBook extends Component {
  constructor(props) {
    super(props);

    this.state = { slug: this.props.match.params.slug, defaultBCG };
  }
  static contextType = BookContext;
  
  render() {
    const { getBook } = this.context;
    const Book = getBook(this.state.slug);
    const addToCart = () => {
      alert("ho")
    }
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
    const { name, price, description, images,author,illustrator} = Book;
    const [mainImg, ...defaultImages] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBCG}>
          <Banner title={`${name} book`}>
            <Link to="/books" className="btn-primary">
              back to books
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-book">
          <div className="single-book-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-book-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>author:{author}</h6>
              <h6>illustrator:{illustrator}</h6>
              <button  onClick={addToCart} class="cart-btn"><FaShoppingCart size={20}/><p>Add To Cart</p></button>
            </article>
          </div>
        </section>
      </>
    );
  }
}