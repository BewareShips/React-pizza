import React from 'react';
import MainPage from '../Pages/MainPage/MainPage';
import s from './App.module.scss'
import Header from '../Components/Header/Header';
import Cart from '../Pages/Cart/Cart';
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className={s.wrapper}>
      <Header/>
      <div>
      <MainPage/>
      <Cart/>
      
        {/* <Route path="/" component={<MainPage/>} exact />
        <Route path="/cart" component={<Cart/>} exact /> */}
       
      </div>
      
    </div>
  );
}

export default App;
