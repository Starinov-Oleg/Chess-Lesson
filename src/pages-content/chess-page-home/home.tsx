import styled from 'styled-components'

import H1 from '../../ui-library/h1/h1'

const StyledHome = styled.div`
  min-height: 100vh;
`
const StyledHomeBody = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 1rem;
  font-family: 'Mochiy';
`
function Home() {
  return (
    <StyledHome>
      <H1 message='Chessland - Chess Club' primary />
      <StyledHomeBody>
        <p>
          Chessland is a chess club for children and their parents. Our club teaches the game of chess in after school
          time.
        </p>
        <p>
          Each participant of the club receives free student materials. The club is conducting detailed statistics and
          admission to the work of students.
        </p>
        <p>
          The club is not only a school for chess training, but also a community in which every student will be able to
          find friends.
        </p>
        <p>
          Our club wants to help the development of chess in the schools of Vietnam and the club program will be able to
          supplement chess programs in schools.
        </p>
        <p>The club offers training programs in accordance with the level and goals.</p>
        <p>For beginners: Rules of the game and debuts.</p>
        <p>For experienced: strategy and partners for the game.</p>
        <p>Modern technique. We turn learning into an exciting game.</p>
        <p>Clean theory</p>
        <p>Explain how the party is arranged - from the rules of the game to the options of strategies.</p>
        <p>Interesting tasks.</p>
        <p>The history of the development of a chess game, tactical techniques in an interactive format.</p>
      </StyledHomeBody>
    </StyledHome>
  )
}
export default Home
