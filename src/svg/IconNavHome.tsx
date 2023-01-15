import styled from 'styled-components';

interface IconPorps {
    iconcolor: string
}

const IconNavHome = ({iconcolor}: IconPorps) => {
    return ( 
        <Svg iconcolor={iconcolor}>
        <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
        </Svg>
     );
}
 
export default IconNavHome;


const attrs = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
  })``;
  
interface IconPorps {
    iconcolor: string
}
const Svg = styled(attrs)<IconPorps>`
    width: 20px;
    height: 20px;
    fill: ${props => props.iconcolor === "home" ? "#FFFFFF" : "#5A698F" };
        &:hover path  {
        fill: red;
    }
`;