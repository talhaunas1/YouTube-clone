import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./component/menu/Menu";
import NavBar from "./component/navBar/Navbar.js";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          {/* sending props in th menu */}
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <NavBar />
            <Wrapper>
              <Routes />
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 50px;
  /* background-color:blue ; */
`;
export default App;
