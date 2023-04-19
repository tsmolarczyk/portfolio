import { useState } from "react";
import { GlobalStyle } from "./styles/global";

import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>app</h1>
    </>
  );
}

export default App;
