import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './App.css'
import {MainPage} from "./components/MainPage";
import {BrowserRouter as Router , Routes ,Route , Link} from "react-router-dom";
import ProductPage from "./components/ProductPage";

function App() {
  return (
          <Router>
            <Routes>
              <Route path="/React-Project" element={<MainPage></MainPage>} />
              <Route path="/React-Project/product" element={<ProductPage></ProductPage>} />
            </Routes>
          </Router>
  )
}

export default App
