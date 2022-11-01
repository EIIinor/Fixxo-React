import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import OfferAndCardsSectionOne from '../sections/OfferAndCardsSectionOne'
import OfferAndCardsSectionTwo from '../sections/OfferAndCardsSectionTwo'
import CustomerInfoSection from '../sections/CustomerInfoSection'
import { ProductContext } from '../contexts/contexts'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext (ProductContext)
  

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <TopPicksSection />
      <OfferAndCardsSectionOne items={productContext.four} />
      <OfferAndCardsSectionTwo items={productContext.four} />
      <CustomerInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView
