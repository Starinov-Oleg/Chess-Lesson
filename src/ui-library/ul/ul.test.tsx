import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Ul from './ul'

describe('list', () => {
  it('render link no data', () => {
    render(
      <BrowserRouter>
        <Ul lists={[]} />
      </BrowserRouter>
    )
    expect(screen.queryByRole('list')).toBeNull()
  })
})
