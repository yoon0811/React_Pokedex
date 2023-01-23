// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./Common/PageHeader";
import PageNavigator from "./PageNavigator";

function App() {
  return (
    <BrowserRouter>
      <PageHeader/>
      <PageNavigator/>
    </BrowserRouter>
  );
}

export default App;
