import React,{ useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./component/menu/Menu";
import NavBar from "./component/navBar/Navbar.js";
import { darkTheme , lightTheme} from "./utils/Theme";
// import from "react";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        {/* sending props in th menu */}
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <NavBar />
          <Wrapper>
            {/* <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3>
            <h3>test</h3> */}
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg };
`;

const Wrapper = styled.div``;
export default App;
