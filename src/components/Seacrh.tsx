import styled from 'styled-components';
import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';


const Seacrh = () => {

    const { search, setSearch } = useContext(StoreContext)

    const HandleSearch = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setSearch(e.target.value)
    }

    return ( 
        <SearchContainer>
            <img src={process.env.PUBLIC_URL + '/assets/icon-search.svg'} alt='search-icon' />
            <SearchInput type="text" value={search} placeholder="Search for movies or TV series" onChange={HandleSearch} />
        </SearchContainer>
     );
}
 
export default Seacrh;

const SearchContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 0px 16px;
    gap: 16px;

    img {
        width: 24px;
        height: 24px;
    }
`
const SearchInput = styled.input`
    all: unset;
    box-sizing: border-box;
    width: 100%;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    caret-color: #FC4747;
    padding: 5px 0;
    &:focus {
        border-bottom: 1px solid #5A698F;
        margin-bottom: -1px;
    }

    &::placeholder {
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
    }


`