import styled from 'styled-components';

interface IconBookmarkEmptyProps {
    clickedBookmark: boolean
}


const IconBookmarkEmpty = ({clickedBookmark}: IconBookmarkEmptyProps) => {
    return ( 
        <Svg clickedBookmark={clickedBookmark} >
            <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/>
        </Svg>
      );
}
 
export default IconBookmarkEmpty;

const attrs = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
  })``;
  

const Svg = styled(attrs)<IconBookmarkEmptyProps>`
    width: 12px;
    height: 14px;
    stroke-width: 1.5px;
    stroke: #FFF;
    fill: ${props => props.clickedBookmark ? "#FFFFFF" : "none" };
`;