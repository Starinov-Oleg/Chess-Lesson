import { ChangeEvent, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ButtonClick from '../../../../ui-library/button-click/button'
import Button from '../../../../ui-library/button-link/button-link'
import CardTest from '../../../../ui-library/card-test/card-test'
import CardTestResult from '../../../../ui-library/card-test/card-test-result'
import { lists_answer } from './test-1-answer'
import { lists } from './test-1-question'
const styled_button = { margin: '1rem', padding: '1rem 4rem' }

function handleSubmit(setShowResults: (active: boolean) => void) {
  setShowResults(true)
  console.log('Form Sent')
}
/** 
function checkValue(e: any, setCheckbox: any) {
  const value = e.target.value
  setCheckbox(value)
  if (value == lists_answer.list_item_label) {
    alert('it is correct')
  } else {
    alert('it is lie')
  }
}
*/

function ChessLessonTestPage() {
  const [showResults, setShowResults] = useState(false)
  // const [showCheckbox, setCheckbox] = useState()
  const [count, setCount] = useState(0)

  function checkValue(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (value == lists_answer.list_item_label) {
      //  setCheckbox(value)
      setCount(count + 1)
    }
  }

  return (
    <Container>
      <Row className='row'>
        <Col lg={12} xs={12}>
          {!showResults ? (
            <>
              <CardTest
                title='Test move piece'
                description='here text about test'
                question='First question?'
                chose_test='checkbox'
                lists={lists}
                onChange={checkValue}
                data-testid='card-test'
              />
              <ButtonClick
                message='Check'
                onClick={() => handleSubmit(setShowResults)}
                disabled={showResults}
                style={styled_button}
              />
            </>
          ) : null}
          {showResults ? <CardTestResult message_result='Correct answer:' count={count} /> : null}
          <br /> <Button message='Back on Lesson page>>' href='/chesslesson' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLessonTestPage
