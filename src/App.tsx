import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
      <GlobalStyle />

      <Header data-testid="header" />
      <Main data-testid="main" />
      <Footer data-testid="footer" />
    </>
  )
}


