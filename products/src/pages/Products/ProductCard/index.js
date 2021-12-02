import React from "react"
import { 
  Button, 
  ImgContainer, 
  Price, 
  ProductCardContainer, 
  ProductDescription, 
  Title 
} from "./styles"

export const ProductCard = ({ product }) => {

  const title = product.title.split(' ', 4).join(' ')
  const price = new Intl.NumberFormat('en-IN', 
  { style: 'currency', currency: 'USD' })
  .format(product.price)

  return (
    <ProductCardContainer>
      <ImgContainer>
        <img src={product.image} alt={product.title} />
      </ImgContainer>
      <ProductDescription>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </ProductDescription>
      <Button>ADD TO CART</Button>
    </ProductCardContainer>
  )
}