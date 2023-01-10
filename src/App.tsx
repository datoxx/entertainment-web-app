import { Routes ,Route } from 'react-router-dom';
import Moves from './pages/Moves';
import Series from './pages/Series';
import Bookmarked from './pages/Bookmarked';
import Home from './pages/Home';
import Header from './components/Header';
import MovesContext from './context/MovesContext';


function App() {

  return (
    <MovesContext>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/moves' element={<Moves />} /> 
        <Route path='/series' element={<Series />} />
        <Route path='/bookmarked' element={<Bookmarked />} />
      </Routes>
    </MovesContext>
  );
}

export default App;
