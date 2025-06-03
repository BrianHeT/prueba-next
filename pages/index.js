import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Carousel from '../components/Carousel'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Carousel/>
      <Testimonial/>
      <Pricing/>
      <FAQ/>
      <ContactForm/>
    </>
  )
}