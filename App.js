import MainPage from "./scheduler/1_page";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  body {
    background-color: #fafafb;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <MainPage/>
    </>
  );
}

export default App;