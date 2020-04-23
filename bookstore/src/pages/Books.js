import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import BooksContainer from "../components/BooksContainer"
const  Books = () => {
    return (
      <>
     <Hero hero="booksHero">
     <Banner title="Our Books" >
          <Link to='/' className="btn-primary">
          Return Home</Link>
        </Banner>
     </Hero>
     <BooksContainer />
     </>
    )
}

export default Books
