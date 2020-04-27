import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedBooks from "../components/FeaturedBooks"

export default function Home(){
    return (
      <>
      <Hero>
        <Banner title="Personal Books" subtitle="Turn any child into a book hero">
          <Link to='/books' className="btn-primary">
          Our Books</Link>
        </Banner>
      </Hero>
      <FeaturedBooks/>
      <Services/>
      </>
    )
}

