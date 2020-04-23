import React from "react";
import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";
import { BookConsumer } from "../Context";
import Loading from "./Loading";
export default function BooksContainer() {
  return (
    <BookConsumer>
      {(value) => {
        const { loading, books, sortedBooks } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <BooksFilter books={books}></BooksFilter>
            <BooksList books={sortedBooks}></BooksList>
          </>
        );
      }}
    </BookConsumer>
  );
}
