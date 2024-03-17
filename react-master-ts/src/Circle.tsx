import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: 30px;
    border-style: solid;
    border-color: ${props => props.borderColor};
    background-color: ${props => props.bgColor};
`;

interface CircleProps {
    bgColor: string
    borderColor?: string
}

function Circle({ bgColor, borderColor }: CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle