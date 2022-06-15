import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Greeting greeting="Hello Gaby 1!"/>} />
      </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
