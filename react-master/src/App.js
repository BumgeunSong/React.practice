import styled from "styled-components";

const Parent = styled.div`
display: flex;
`;

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

function App() {
  return (
    <Parent>
      <Box1 />
      <Box2 />
    </Parent>
  );
}

export default App;