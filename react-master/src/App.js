import styled, { keyframes } from "styled-components";

const Parent = styled.div`
display: flex;
`;


const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
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

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
  animation: ${rotationAnimation} 2s linear infinite;
`;


const BigBox = styled(Box)`
  width: 300px;
  height: 300px;
`

const Box1 = styled.div`
background-color: teal;
width: 100px;
height: 100px;
`;

const Box2 = styled.div`
background-color: tomato;
width: 100px;
height: 100px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: gray;
`;

function App() {
  return (
    <Parent>
      <Box bgColor="teal"></Box>
    </Parent>
  );
}

export default App;