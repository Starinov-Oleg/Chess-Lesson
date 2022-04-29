import CoachBlock from './coaches-block/coaches-block'
import About from './coaches-about/coaches-about'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledChessCochess = styled.div`
  min-height: 100vh;
`
const StyledChessCoachessStart = styled.div`
  text-align: left;
  background-color: aliceblue;
  margin: 1rem 0rem 1rem;
  border-radius: 10px;
`
function ChessLandCoaches() {
  return (
    <section className='chesscoaches'>
      <StyledChessCochess>
        <Row>
          <Col md={8} xs={12}>
            <CoachBlock message='Chess Land for coaches and parents' textMessage='Here text about couching' />
            <CoachBlock message='Coaches answer on question' textMessage='Here text about couching' />
          </Col>
          <Col md={4} xs={12}>
            <StyledChessCoachessStart>
              <About message='Become a Member of the Chess Land' messagebutton='JOIN FOR FREE' />
            </StyledChessCoachessStart>
          </Col>
        </Row>
      </StyledChessCochess>
    </section>
  )
}
export default ChessLandCoaches
