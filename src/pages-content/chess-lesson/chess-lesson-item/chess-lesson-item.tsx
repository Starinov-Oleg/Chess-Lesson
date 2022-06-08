import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import H3 from '../../../ui-library/h3/h3'

interface ChessLessonItemProps {
  href: string
  title: string
  text: string
  author: string
  lessons: string
  level: string
}
const StyledChessLessonItem = styled.div`
  background-color: #e3f9f8;
  margin: 1rem;
  border-radius: 10px;
`
const StyledChessLessonImg = styled.img`
  padding: 1rem;
  width: 100%;
`
const StyledChessLessonContent = styled.div`
  padding: 1rem;
`
const StyledChesslessonSpan = styled.span`
  color: black;
  font-size: 1rem;
`
const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  text-align: left;
  font-family: 'Mochiy';
`
function ChessLessonItem({ href, title, text, author, lessons, level }: ChessLessonItemProps) {
  return (
    <StyledChessLessonItem>
      <StyledNavLink to={href}>
        <div>
          <StyledChessLessonImg
            src='https://images.chesscomfiles.com/uploads/v1/lesson_course/8ba0f4de-6e57-11e8-b3b5-4bc0b74cd42e.26fa16e1.320x180o.b4244f444c1b.png'
            alt={title}
          />
        </div>
        <StyledChessLessonContent>
          <div>
            <H3 message={title} primary />
            <p>{text}</p>
            <div>{author}</div>
          </div>
          <div>
            <div>
              <StyledChesslessonSpan>{lessons}</StyledChesslessonSpan>
              <StyledChesslessonSpan> {level}</StyledChesslessonSpan>
            </div>
          </div>
        </StyledChessLessonContent>
      </StyledNavLink>
    </StyledChessLessonItem>
  )
}
export default ChessLessonItem
