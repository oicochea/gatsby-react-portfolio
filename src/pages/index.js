import React from "react"
import Layout from "../components/layout"
import About from "../components/aboutMe"
import Hero from "../components/hero"
import Header from "../components/header"
import Projects from "../Projects"
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
      <Projects/>
    </Layout>
  
  )

}

export default IndexPage
