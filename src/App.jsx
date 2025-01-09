import { useState } from "react";

import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";

function App() {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
