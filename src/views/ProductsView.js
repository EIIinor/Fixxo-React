import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductCardSection from '../sections/ProductCardSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'
  const productContext = useContext (ProductContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductCardSection />
      <ProductGridSection title="Related Products" items={productContext.four}/>
      <FooterSection />
    </>
  )
}

export default ProductsView
