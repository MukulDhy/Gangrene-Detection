// Spinner.js
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const progressAnimation = keyframes`
  0% {
    left: -24vw;
  }
  10% {
    left: -20vw;
  }
  30% {
    left: -16vw;
  }
  50% {
    left: -12vw;
  }
  65% {
    left: -10vw;
  }
  80% {
    left: -4vw;
  }
  100% {
    left: 0;
  }
`;

// Styled components
export const SpinnerContainer = styled.div`
  width: 40vw;
  height: 40vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  animation: ${rotate360} 5s linear infinite;
`;

export const SpinnerCommon = styled.div`
  height: 5vw;
  max-height: 100%;
  overflow: auto;
  width: 2vw;
  margin: auto;
  max-width: 100%;
  position: absolute;
  border-radius: 0vw 10vw 0vw 10vw;
  box-shadow: inset 0vw 0vw 0vw 0.1vw #E645D0, 0vw 0vw 1.5vw 0vw #E645D0;
`;

export const SpinnerOne = styled(SpinnerCommon)`
  transform: rotate(45deg);
  left: 0;
  right: 0;
  top: 0;
  bottom: 7.5vw;
  animation: ${fadeIn} 1s ease infinite, ${progressAnimation} 1s ease infinite;
`;

// ... Repeat for SpinnerTwo to SpinnerEight

export const SpinnerBar = styled.div`
  width: 12vw;
  height: 0.25vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 16vw;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #E645D0;
`;

export const SpinnerProgress = styled.div`
  width: 12vw;
  height: 0.5vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #17E1E6;
  animation: ${progressAnimation} 15s ease;
`;

export const SpinnerFadeIn = styled.div`
  animation: ${fadeIn} 2s ease;
`;

export const SpinnerOut = styled.div`
  animation: ${fadeOut} 2s 15s ease;
`;

// Keyframes for fadeOut animation
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
