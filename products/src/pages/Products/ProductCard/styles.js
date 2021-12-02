import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 250px;
  box-shadow: 0 0 8px #D0D0D0;
  border-radius: 8px;
  position: relative;
`
export const ImgContainer = styled.div`
  margin-top: 30px;
  height: 180px;
  width: 80%;

  img {
    height: 100%;
    width: 100%;
  }
`

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  padding: 0 10px;  
`

export const Title = styled.span`
  font-size: 0.875rem;
  text-align: center;
`

export const Price = styled.span`
  margin-top: 10px;
  font-weight: bold;
  font-size: 0.875rem;
  text-align: center;
  position: absolute;
  bottom: 70px;
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  background: #8257E6;
  transition: filter 0.2s;
  color: #fff;
  width: 80%;
  height: 40px;
  border-radius: 8px;
  position: absolute;
  bottom: 10px;

  &:hover {
    filter: brightness(0.8);
  }
`


