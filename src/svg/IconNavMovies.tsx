import styled from 'styled-components';

interface IconPorps {
    iconcolor: string
}


const IconNavMovies = ({iconcolor}: IconPorps) => {
    return ( 
        <Svg iconcolor={iconcolor}>
            <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
        </Svg>
     );
}
 
export default IconNavMovies;

const attrs = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
  })``;
  
interface IconPorps {
    iconcolor: string
}
const Svg = styled(attrs)<IconPorps>`
    width: 20px;
    height: 20px;
    fill: ${props => props.iconcolor === "moves" ? "#FFFFFF" : "#5A698F" };
        &:hover path  {
        fill: red;
    }
`;