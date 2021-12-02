import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Loader } from '../../components/Loader'
import { ContainerProducts, ProductsContent } from './styles';
import { ProductCard } from './ProductCard';

export const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const response = await api.get('products')
        console.log(response.data)
        setProducts(response.data)
      } catch (err) {
        throw new Error(err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          width: '100%',
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader />
      </div>
    )
  }

  console.log(products)

  return (
    <ContainerProducts>
      <ProductsContent>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContent>
    </ContainerProducts>
  );
}