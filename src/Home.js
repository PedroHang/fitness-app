import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Features from './Features'
import SubBanner from './SubBanner'
import About from './About'
import Classes from './Classes'
import Trainers from './Trainers'
import Testimonial from './Testimonial'
import Blog from './Blog'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <SubBanner />
      <About />
      <Classes />
      <Trainers />
      <Testimonial />
      <Blog />
      <Footer />
    </>

  )
}
