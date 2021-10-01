import styled, { keyframes } from "styled-components"

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }  
  100% { transform: rotate(360deg); }
`
const LoadingIndicator = styled.div`
  border: 10px solid #eaf0f6;
  border-radius: 50%;
  border-top: 10px solid #e03e0e;
  width: 50px;
  height: 50px;
  animation: ${loadingAnimation} 1s linear infinite;
  margin: auto;
  display: flex;
  align-item: center;

  @media only screen and (max-width: 767px) {
    border: 5px solid #eaf0f6;
    border-top: 5px solid #e03e0e;
    width: 64px;
    height: 64px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    border: 5px solid #eaf0f6;
    border-top: 5px solid #e03e0e;
    width: 80px;
    height: 80px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    border: 5px solid #eaf0f6;
    border-top: 5px solid #e03e0e;
    width: 60px;
    height: 60px;
  }
`
export default LoadingIndicator
