import styled, { keyframes } from 'styled-components';

// Create the keyframes
const isRotating = keyframes`
  to {
      transform: rotate(1turn);
    }
`;

export const LoaderComponent = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #8257E6;
  border-radius: 50%;
  animation: ${isRotating} 1s infinite;
`;

