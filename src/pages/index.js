import React from "react"
import Layout from "../components/layout"
import About from "../components/aboutMe"
import Hero from "../components/hero"
import Header from "../components/header"
import Projects from "../Projects"
import Cards from "../components/cards"
import Contact from "../components/contactme"

// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <div className="topThird">
      <Header/>
      <Hero/>
      <About/>
    </div>
      <Cards/>
   
      <Projects/>
      <Contact/>
    </Layout>
  
  )

}

export default IndexPage
