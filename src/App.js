import './App.css';
import React from "react";
import Landing from './landing-content/landing';
import WhatIsChessland from './pages-content/what-is-chess-land/what-is-chessland';
import Pages from './pages-content/pages';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ChessLandSchool from './pages-content/chess-land-school/chess-land-school';
import ChessLandCoaches from './pages-content/chess-land-coaches/chess-land-coaches';
import ChessLearn from './pages-content/chess-learn/chess-land-school';
function App() {
  return (
    <BrowserRouter> 
      <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/pages" element={<Pages />} >
          <Route path="whatis" element={<WhatIsChessland/>}/>
          <Route path="chesslandschool" element={<ChessLandSchool/>}/>
          <Route path="chesslandcoaches" element={<ChessLandCoaches/>}/>
          <Route path="chesslearn" element={<ChessLearn/>}/>
       </Route>
      </Routes>  
      </div> 
    </BrowserRouter>
  );
}

export default App;
