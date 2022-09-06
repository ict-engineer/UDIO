import React from 'react';
import logo from './logo.svg';
import {About} from "./Components/About/About";
import {Content} from "./Components/Content/Content";
import {Industries} from "./Components/Industries/Industries";
import {Services} from "./Components/Services/Services";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";

function App() {
  return (
      <div className="">
        <Header/>
        <About/>
        <Content/>
        <Industries/>
        <Services/>
        <Footer/>
      </div>
  );
}

export default App;
