import { createContext,  useState } from "react";
import data from "../data.json";
import { UseStates, MovesContextProps } from '../types/context';
import { MovesObject } from '../types/moves';


export const StoreContext = createContext<UseStates>({
  movies: [],
  setMovies: () => {}
});

const MovesContext = ({children}: MovesContextProps) => {

  const [movies, setMovies] = useState<MovesObject[]>(data);

  return ( 
    <StoreContext.Provider value={{movies, setMovies}}>
    { children }
    </StoreContext.Provider>

   );
}
 
export default MovesContext;


