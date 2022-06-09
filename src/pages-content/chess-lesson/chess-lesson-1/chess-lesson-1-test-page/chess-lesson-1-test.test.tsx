import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import ChessLessonTestPage from './chess-lesson-1-test-page'

describe('exam page ', () => {
  it('exam page  render', () => {
    render(
      <BrowserRouter>
        <ChessLessonTestPage />
      </BrowserRouter>
    )
  })
})
