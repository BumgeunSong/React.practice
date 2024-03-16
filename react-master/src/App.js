import styled, { keyframes } from "styled-components";

const Parent = styled.div`
display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`

const Emoji = styled.span`
font-size: 36px;
`

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 2s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 72px;
    }
  }
`;

const BigBox = styled(Box)`
  width: 300px;
  height: 300px;
`

const Input = styled.input.attrs({ required: true })`
  background-color: gray;
`;

const Title = styled.h1`
color: ${props => props.theme.textColor};
`

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.backgroundColor};
`

function App() {
  return (
    <Wrapper>
      <Title>Boooya!</Title>
    </Wrapper>
  );
}

export default App;