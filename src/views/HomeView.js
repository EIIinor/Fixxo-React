import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import OfferGridSection from '../sections/OfferGridSection'
import OfferAndCardsSection from '../sections/OfferAndCardsSection'
import CustomerInfoSection from '../sections/CustomerInfoSection'

const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img:"https://images.pexels.com/photos/13641487/pexels-photo-13641487.jpeg?cs=srgb&dl=pexels-eyup-beyhan-13641487.jpg&fm=jpg&h=210&w=255&fit=crop&_gl=1*1fjap93*_ga*MTE3NDI4NDgyMS4xNjY2MTg0MTM4*_ga_8JE65Q40S6*MTY2NjE4NDEzOC4xLjEuMTY2NjE4NDQ3MS4wLjAuMA.." },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img:"https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img:"https://images.pexels.com/photos/7410486/pexels-photo-7410486.jpeg?cs=srgb&dl=pexels-ante-7410486.jpg&fm=jpg&w=3312&h=5040&_gl=1*12726x8*_ga*MTE3NDI4NDgyMS4xNjY2MTg0MTM4*_ga_8JE65Q40S6*MTY2NjE4NDEzOC4xLjEuMTY2NjE4NjE1Ni4wLjAuMA.." },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img:"https://images.pexels.com/photos/10318499/pexels-photo-10318499.jpeg?cs=srgb&dl=pexels-ron-lach-10318499.jpg&fm=jpg&w=4160&h=6240&_gl=1*u7isrv*_ga*MTE3NDI4NDgyMS4xNjY2MTg0MTM4*_ga_8JE65Q40S6*MTY2NjE4NDEzOC4xLjEuMTY2NjE4NjIyMS4wLjAuMA.." }
  ])

  const [topProducts, setTopProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img:"https://images.pexels.com/photos/13641487/pexels-photo-13641487.jpeg?cs=srgb&dl=pexels-eyup-beyhan-13641487.jpg&fm=jpg&h=210&w=255&fit=crop&_gl=1*1fjap93*_ga*MTE3NDI4NDgyMS4xNjY2MTg0MTM4*_ga_8JE65Q40S6*MTY2NjE4NDEzOC4xLjEuMTY2NjE4NDQ3MS4wLjAuMA.." },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img:"https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img:"https://images.pexels.com/photos/7410486/pexels-photo-7410486.jpeg?cs=srgb&dl=pexels-ante-7410486.jpg&fm=jpg&w=3312&h=5040&_gl=1*12726x8*_ga*MTE3NDI4NDgyMS4xNjY2MTg0MTM4*_ga_8JE65Q40S6*MTY2NjE4NDEzOC4xLjEuMTY2NjE4NjE1Ni4wLjAuMA.." }
  ])


  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection products={featuredProducts} />
      <TopPicksSection />
      <OfferGridSection />
      <OfferAndCardsSection />
      <CustomerInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView
