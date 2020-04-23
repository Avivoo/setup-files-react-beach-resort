import React, { Component} from "react";
import Client from "./Contentful";

const BookContext = React.createContext();

export default class BookProvider extends Component {
  state = {
    books: [],
    featuredBooks: [],
    sortedBooks: [],
    loading: true,
  };
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "bookStore",
        order:"sys.createdAt"
      })
      console.log(response)
      let books = this.formatData(response.items);

      let featuredBooks = books.filter((book) => book.bestSeller === true);

      this.setState({
        books,
        featuredBooks,
        sortedBooks: books,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount(){
    this.getData()
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let book = { ...item.fields, images, id };
      return book;
    });
    return tempItems;
  }

  getBook = (slug) => {
    let tempBooks = [...this.state.books];
    const book = tempBooks.find((book) => book.slug === slug);
    return book;
  };

 
  render() {
    return (
      <BookContext.Provider value={{ ...this.state, getBook: this.getBook }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer, BookContext };
