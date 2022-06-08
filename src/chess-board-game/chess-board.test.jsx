import { render, screen } from '@testing-library/react'

import ChessBoard from './chess-board'

describe('chess board for play', () => {
  it('card-board game  render', () => {
    render(<ChessBoard />)
  })
})
