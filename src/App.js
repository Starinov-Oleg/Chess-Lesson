import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import ScrollToTop from './common/scroll-top/scroll'
import { COLORS } from './common/styled-components/var-colors.styled'
import useGetUser from './hooks/get-user-hook'
import Landing from './landing-content/landing'
import Adventure from './pages-content/chess-adventure/adventure'
import ContactContainer from './pages-content/chess-contact/contact-container'
import EventsContainer from './pages-content/chess-events/events-container'
import ChessLandCoaches from './pages-content/chess-land-coaches/chess-land-coaches'
import ChessLandSchool from './pages-content/chess-land-school/chess-land-school'
import ChessLearn from './pages-content/chess-learn/chess-land-school'
import ChessLesson from './pages-content/chess-lesson/chess-lesson'
import ChessLesson1 from './pages-content/chess-lesson/chess-lesson-1/chess-lesson-1'
import ChessLesson1Practice from './pages-content/chess-lesson/chess-lesson-1/chess-lesson-1-board-practice/chess-lesson-1-practice'
import ChessLessonTestPage from './pages-content/chess-lesson/chess-lesson-1/chess-lesson-1-test-page/chess-lesson-1-test-page'
import Home from './pages-content/chess-page-home/home'
import Pages from './pages-content/pages'
import WhatIsChessland from './pages-content/what-is-chess-land/what-is-chessland'

const Login = React.lazy(() => import('./user-content/login/login'))
const Register = React.lazy(() => import('./user-content/register/register'))
const RegisterCouch = React.lazy(() => import('./pages-content/chess-land-coaches/coaches-register/register'))
const User = React.lazy(() => import('./user-content/user-page/index_user'))
const Settings = React.lazy(() => import('./user-content/user-page/index_user-settings'))
const Play = React.lazy(() => import('./pages-content/chess-play/play'))
const ChatPage = React.lazy(() => import('./user-content/chat-page/chat-page'))
function App(props) {
  const user = useGetUser()

  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ScrollToTop />
        <Suspense fallback={<div>Loading</div>}>
          <div className='App'>
            <Routes>
              <Route
                path='/'
                element={
                  <Landing
                  /*contentSafe={props.state.landing.contentSafe.lists}*/
                  /*contentCouching={props.state.landing.contentCouching.lists}*/
                  /*contentProgramm={props.state.landing.contentProgramm.lists}*/
                  />
                }
              />
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/regcouching' element={<RegisterCouch />}></Route>
              <Route element={<Pages navlinkItems={props.state.navlinkItems} />}>
                <Route path='home' element={<Home />} />
                <Route path='whatis' element={<WhatIsChessland />} />
                <Route path='chesslandschool' element={<ChessLandSchool />} />
                <Route path='chesslandcoaches' element={<ChessLandCoaches />} />
                <Route path='chesslearn' element={<ChessLearn learn={props.state.learn} />} />
                <Route path='contact' element={<ContactContainer />} />
                <Route path='events' element={<EventsContainer />} />
                <Route path='adventure' element={<Adventure />} />
                <Route path='chesslesson/chesslesson1' element={<ChessLesson1 />} />
                <Route path='chesslesson/chesslesson1/cheslesson1practice' element={<ChessLesson1Practice />} />
                <Route path='chesslesson/chesslesson1/cheslesson1test' element={<ChessLessonTestPage />} />
                <Route path='chesslesson' element={<ChessLesson chesslesson={props.state.chesslesson} />} />
                <Route path='user/:id/settings' element={<Settings />}></Route>
                <Route
                  path='user/:id/post'
                  element={<User />}
                  render={({ match }) => (
                    <User user={user.find(user => String(user.id) === String(match.params.id))} />
                  )}></Route>
                <Route path='chat/:id' element={<ChatPage />}></Route>
              </Route>
              <Route path='/play' element={<Play chessplay={props.state.chessplay} />} />
              <Route
                path='*'
                element={
                  <Landing
                  /*contentSafe={props.state.landing.contentSafe.lists}*/
                  /* contentCouching={props.state.landing.contentCouching.lists}*/
                  /* contentProgramm={props.state.landing.contentProgramm.lists}*/
                  />
                }></Route>
            </Routes>
            <COLORS />
          </div>
        </Suspense>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  )
}

export default App

/** render for User component - solve on time... need fix. For fetch data when empty cashe  */
