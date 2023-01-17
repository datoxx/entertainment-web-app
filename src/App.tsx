import { Routes ,Route } from 'react-router-dom';
import Moves from './pages/Moves';
import Series from './pages/Series';
import Bookmarked from './pages/Bookmarked';
import Home from './pages/Home';
import Header from './components/Header';
import MovesContext from './context/MovesContext';
import styled from 'styled-components';
import Seacrh from './components/Seacrh';


function App() {

  return (
    <MovesContext>
      <Wrapper>
        <Container>
          <Header />
          <div>
          <Seacrh />
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/moves' element={<Moves />} /> 
            <Route path='/series' element={<Series />} />
            <Route path='/bookmarked' element={<Bookmarked />} />
          </Routes>
          </div>
        </Container>
      </Wrapper>
    </MovesContext>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 24px;
  padding-bottom: 40px;
  @media (min-width: 1024px) {
    flex-direction: row;  
    padding-left: 140px;
    }
    
`
