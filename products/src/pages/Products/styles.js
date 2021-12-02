import styled from 'styled-components';

export const ContainerProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px;
`
export const ProductsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr ;
  }

  @media (max-width: 815px) {
    grid-template-columns: 1fr 1fr ;
  }

  @media (max-width: 545px) {
    grid-template-columns: 1fr;
  }
`