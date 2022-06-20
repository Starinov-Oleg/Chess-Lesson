import { getByTestId, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderIntoDocument } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'

import ButtonClick from '../../../../ui-library/button-click/button'
import CardTest from '../../../../ui-library/card-test/card-test'
import CardTestResult from '../../../../ui-library/card-test/card-test-result'
import ChessLessonTestPage from './chess-lesson-1-test-page'

describe('exam page ', () => {
  it('exam page  render', () => {
    render(
      <BrowserRouter>
        <ChessLessonTestPage />
      </BrowserRouter>
    )
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Correct answer:')).toBeTruthy()
  })

  it('button check exam', () => {
    const onClick = jest.fn()
    render(<ButtonClick onClick={onClick} disabled={false} message={''} />)
    userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  it('checkbox render', () => {
    const checkbox = render(
      <BrowserRouter>
        <ChessLessonTestPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('checkbox', { name: 'test1' })).not.toBeChecked()
  })
  it('checbox click', () => {
    render(
      <BrowserRouter>
        <ChessLessonTestPage />
      </BrowserRouter>
    )
    userEvent.dblClick(screen.getByRole('checkbox', { name: 'test1' }))
  })
})
