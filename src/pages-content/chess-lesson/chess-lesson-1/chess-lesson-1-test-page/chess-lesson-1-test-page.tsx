import Button from '../../../../ui-library/button-link/button-link'
import { Col, Row, Container } from 'react-bootstrap'
import CardTest from '../../../../ui-library/card-test/card-test'
import CardTestResult from '../../../../ui-library/card-test/card-test-result'
import ButtonClick from '../../../../ui-library/button-click/button'
import { useState } from 'react'

const styled_button = { margin: '1rem', padding: '1rem 4rem' }
function handleSubmit(setShowResults: any) {
  setShowResults(true)
  console.log('Отправлена форма.')
}
function ChessLessonTestPage() {
  const [showResults, setShowResults] = useState(false)

  const lists = [
    { id: 0, list_item_label: 'test', list_item_img: '' },
    { id: 1, list_item_label: 'test', list_item_img: '' },
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
              />
              <ButtonClick
                message='Check'
                onClick={() => handleSubmit(setShowResults)}
                disabled={showResults}
                style={styled_button}
              />
            </>
          ) : null}
          {showResults ? <CardTestResult /> : null}
          <br /> <Button message='Back on Lesson page>>' href='/chesslesson' />
        </Col>
      </Row>
    </Container>
  )
}

export default ChessLessonTestPage

/**TODO delete disabled- enabled, logic for count test and display report */
