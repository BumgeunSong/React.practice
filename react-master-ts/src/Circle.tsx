import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderMaker: (radius: number) => string
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: ${props => props.borderMaker(20)};
    background-color: ${props => props.bgColor};
`;

interface CircleProps {
    bgColor: string
}

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} borderMaker={(radius) => `${radius}px`}/>;
}

export default Circle