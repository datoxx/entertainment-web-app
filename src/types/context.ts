import { MovesObject } from './moves';

export type MovesContextProps = {
    children?: JSX.Element | JSX.Element[]
  };
  
export type UseStates = {
    movies: MovesObject[],
    setMovies: (e:MovesObject[]) => void
    search: string,
    setSearch: (e:string) => void,
  }
  