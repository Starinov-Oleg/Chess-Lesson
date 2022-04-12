import './App.css'
import React, { Suspense } from 'react'
import Landing from './landing-content/landing'
import WhatIsChessland from './pages-content/what-is-chess-land/what-is-chessland'
import Pages from './pages-content/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChessLandSchool from './pages-content/chess-land-school/chess-land-school'
import ChessLandCoaches from './pages-content/chess-land-coaches/chess-land-coaches'
import ChessLearn from './pages-content/chess-learn/chess-land-school'
import Home from './pages-content/chess-page-home/home'
import Adventure from './pages-content/chess-adventure/adventure'
import EventsContainer from './pages-content/chess-events/events-container'
import ContactContainer from './pages-content/chess-contact/contact-container'
import ScrollToTop from './common/scroll-top/scroll'
import ChessLesson from './pages-content/chess-lesson/chess-lesson'
import ChessLesson1 from './pages-content/chess-lesson/chess-lesson-1/chess-lesson-1'
const Login = React.lazy(() => import('./user-content/login/login'))
const Register = React.lazy(() => import('./user-content/register/register'))
const RegisterCouch = React.lazy(() => import('./pages-content/chess-land-coaches/coaches-register/register'))
const User = React.lazy(() => import('./user-content/user-page/user-container'))
const Play = React.lazy(() => import('./pages-content/chess-play/play'))
const ChatPage = React.lazy(() => import('./user-content/chat-page/chat-page'))
function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div>Loading</div>}>
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={
                <Landing
                  contentSafe={props.state.landing.contentSafe.lists}
                  contentCouching={props.state.landing.contentCouching.lists}
                  contentProgramm={props.state.landing.contentProgramm.lists}
                  banerItemCards={props.state.banerItemCard}
                />
              }
            />
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/regcouching' element={<RegisterCouch />}></Route>
            <Route element={<Pages navlinkItems={props.state.navlinkItems} />}>
              <Route path='home' element={<Home />}></Route>
              <Route path='whatis' element={<WhatIsChessland />} />
              <Route path='chesslandschool' element={<ChessLandSchool />} />
              <Route path='chesslandcoaches' element={<ChessLandCoaches />} />
              <Route path='chesslearn' element={<ChessLearn learn={props.state.learn} />} />
              <Route path='contact' element={<ContactContainer />} />
              <Route path='events' element={<EventsContainer />} />
              <Route path='adventure' element={<Adventure />} />
              <Route path='chesslesson' element={<ChessLesson chesslesson={props.state.chesslesson} />}>
                <Route path='chesslesson/1' element={<ChessLesson1 />} />
              </Route>
              <Route path='user/:id' element={<User />}></Route>
              <Route path='chat/:id' element={<ChatPage />}></Route>
            </Route>
            <Route path='/play' element={<Play chessplay={props.state.chessplay} />} />
            <Route
              path='*'
              element={
                <Landing
                  contentSafe={props.state.landing.contentSafe.lists}
                  contentCouching={props.state.landing.contentCouching.lists}
                  contentProgramm={props.state.landing.contentProgramm.lists}
                />
              }></Route>
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
