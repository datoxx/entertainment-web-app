import { createContext,  useEffect,  useState } from "react";
import data from "../data.json";
import { UseStates, MovesContextProps } from '../types/context';
import { MovesObject } from '../types/moves';


export const StoreContext = createContext<UseStates>({
  movies: [],
  setMovies: () => {},
  search: "",
  setSearch: () => {},
  handleClickedBookmark: () => {},
});

const MovesContext = ({children}: MovesContextProps) => {

  const [movies, setMovies] = useState<MovesObject[]>(data);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const jsonStr = localStorage.getItem("movies");
    if (jsonStr == null) return;
    setMovies(JSON.parse(jsonStr));
  }, []);

  const handleClickedBookmark = (title: string) => {
    const moviesClone: MovesObject[] = movies.slice();
    const selectMovie: MovesObject | undefined = moviesClone.find((move:MovesObject) => move.title === title);
    if(selectMovie) selectMovie.isBookmarked = !selectMovie.isBookmarked;  

    setMovies(moviesClone)
    localStorage.setItem("movies", JSON.stringify(moviesClone));
}

  return ( 
    <StoreContext.Provider value={{movies, setMovies, search, setSearch, handleClickedBookmark}}>
    { children }
    </StoreContext.Provider>

   );
}
 
export default MovesContext;


