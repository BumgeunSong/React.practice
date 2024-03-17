import styled from "styled-components";

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
`;

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} borderMaker={(radius) => `${radius}px`}/>;
}
export default Circle