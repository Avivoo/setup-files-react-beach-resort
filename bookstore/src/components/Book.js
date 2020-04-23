import React, { useContext } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/book1.jpg";
import PropTypes from "prop-types";



export default function Book({ book }) {
  
  const { name, slug, images, price } = book;

  return (
    <article className="book">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="bookie"></img>
        <div className="price-top">
          <h6>{price}</h6>
          <p>SoftCover edition</p>
        </div>
        <Link to={`books/${slug}`} className="btn-primary book-link">
          Features
        </Link>
      </div>
      <p className="book-info">{name}</p>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
  }),
};
