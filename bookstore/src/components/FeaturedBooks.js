import React, { Component } from "react";
import { BookContext } from "../Context";
import Loading from "../components/Loading";
import Book from "../components/Book";
import Title from "./Title";
export default class FeaturedBooks extends Component {
  static contextType = BookContext;
  render() {
    let { loading, featuredBooks } = this.context;

    featuredBooks = featuredBooks.map((book) => {
      return <Book key={book.id} book={book} />;
    });
    
    return (
      <section className="featured-books">
        <Title title="best seller books" />
        <div className="featured-books-center">
          {loading ? <Loading /> : featuredBooks}
        </div>
      </section>
    );
  }
}
