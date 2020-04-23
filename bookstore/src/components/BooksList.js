import React from "react";
import Book from "./Book";

const BooksList = ({ books }) => {
  if (books.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no books matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="bookslist">
      <div className="bookslist-center">
        {books.map(item => {
          return <Book key={item.id} book={item} />;
        })}
      </div>
    </section>
  );
};

export default BooksList;