import { render } from '@testing-library/react'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { BrowserRouter } from 'react-router-dom'

import ChessLesson1 from './chess-lesson-1-practice'

describe('lesson1 practice', () => {
  it('leson1 practice  render', () => {
    render(
      <BrowserRouter>
        <DndProvider backend={TouchBackend}>
          <ChessLesson1 />
        </DndProvider>
      </BrowserRouter>
    )
  })
})
