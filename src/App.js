import './App.css';
import React from "react";
import Landing from './landing-content/landing';
import WhatIsChessland from './pages-content/what-is-chess-land/what-is-chessland';
import Pages from './pages-content/pages';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ChessLandSchool from './pages-content/chess-land-school/chess-land-school';
import ChessLandCoaches from './pages-content/chess-land-coaches/chess-land-coaches';
import ChessLearn from './pages-content/chess-learn/chess-land-school';
import Home from './pages-content/chess-page-home/home';
import Play from './pages-content/chess-play/play';
import Contact from './pages-content/chess-contact/contact';
import Events from './pages-content/chess-events/events';
import Adventure from './pages-content/chess-adventure/adventure';
function App() {
  return (
    <BrowserRouter> 
      <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route  path="/pages" element={<Pages />} >
          <Route path="home" element={<Home/>} ></Route>
          <Route path="whatis" element={<WhatIsChessland/>}/>
          <Route path="chesslandschool" element={<ChessLandSchool/>}/>
          <Route path="chesslandcoaches" element={<ChessLandCoaches/>}/>
          <Route path="chesslearn" element={<ChessLearn/>}/>
          <Route path="play" element={<Play/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="events" element={<Events/>}/>
          <Route path="adventure" element={<Adventure/>}/>
       </Route>
      </Routes>  
      </div> 
    </BrowserRouter>
  );
}

export default App;
