import styled from "styled-components";

function App() {

  const Parent = styled.div`
    display: flex;
  `

  const Box = styled.div`
    background-color: teal;
    width: 100;
    height: 100;
  `

  return (
    <Parent>
      <Box />
      <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    </Parent>
  );
}

export default App;
