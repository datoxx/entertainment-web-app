
import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';

const Moves = () => {

const { movies } = useContext(StoreContext)

console.log("movies", movies[0] )

    return ( 
        <div>
            moves
        </div>
     );
}
 
export default Moves;