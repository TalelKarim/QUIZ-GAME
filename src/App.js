import React from 'react';
import Accueil from './Components/Accueil';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Quiz from './Components/Quiz';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
`
export default function App() {
  return (
      <BrowserRouter>
        <GlobalStyle /> 
        <Routes>
            <Route  path='/' element={<Accueil />} />
            <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    
  )
}
