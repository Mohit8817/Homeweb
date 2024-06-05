// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Residencies from './component/Residencies/Residencies';
import Value from './component/Value/Value';
// import Cards from './component/card/cards';
import Getintouch from './component/Get_in_touch/Getintouch';
import Contact from './component/contact/Contact';
import GetStart from './component/getstart/Get_start';
import MyData from './component/show_data/My_data';
import React, { useEffect } from 'react';
import Aos from 'aos'


function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Dashboard />
        <Residencies />
        <Value />
        {/* <Cards /> */}
        <Getintouch />
        <MyData />
        <Contact />
        <GetStart />

      </BrowserRouter>
    </>
  );
}

export default App;
