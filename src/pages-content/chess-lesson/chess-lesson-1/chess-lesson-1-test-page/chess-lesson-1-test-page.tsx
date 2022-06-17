import { ChangeEvent, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ButtonClick from '../../../../ui-library/button-click/button'
import Button from '../../../../ui-library/button-link/button-link'
import CardTest from '../../../../ui-library/card-test/card-test'
import CardTestResult from '../../../../ui-library/card-test/card-test-result'

const styled_button = { margin: '1rem', padding: '1rem 4rem' }
function handleSubmit(setShowResults: (active: boolean) => void) {
  setShowResults(true)
  console.log('Отправлена форма.')
}
function checkValue(e: ChangeEvent<HTMLInputElement>) {
  const value = e.target.value
  console.log('You selected' + value)
}
function ChessLessonTestPage() {
  const [showResults, setShowResults] = useState(false)

  const lists = [
    { id: 0, list_item_label: 'test1', list_item_img: '' },
    { id: 1, list_item_label: 'test2', list_item_img: '' },
  ]

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
          {showResults ? <CardTestResult data-testid='card-result' /> : null}
          <br /> <Button message='Back on Lesson page>>' href='/chesslesson' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLessonTestPage

/**TODO delete disabled- enabled, logic for count test and display report */
