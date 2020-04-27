import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaShekelSign } from "react-icons/fa";



export default function Book({ book }) {
  
  const { name, slug, images, price, ages } = book;

  return (
    <article className="book">
      <div className="img-container">
        <img src={images[0] || images[1]} alt="bookie"></img>
        <div className="price-top">
          <h6>{price}<FaShekelSign size={10}/></h6>
          <p>SoftCover edition</p>
        </div>
        <Link to={`books/${slug}`} className="btn-primary book-link">
          Features
        </Link>
      </div>
      <p className="book-info">{name}</p>
      <p className>ages:{ages-2} - {ages} for <b style={{color:"#6ca0dc"}}>boys</b> & <b style={{color:"#f8b9d4"}}>girls</b></p>
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
