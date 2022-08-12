import styled from "styled-components";
import Menu from './component/menu/Menu'
import NavBar from './component/navBar/Navbar.js'


function App() {
  return (
    <div>
      <Container>
        <Menu/>
          <Main>
          <NavBar/>
          <Wrapper>
            VideoCards
          </Wrapper>
          </Main>
      </Container>
     
    </div>
  );
}

const Container = styled.div`
display: flex;
`

const Main = styled.div`
flex:7 ;
`

const Wrapper = styled.div``
export default App;

