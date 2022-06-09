import { render, screen } from '@testing-library/react'

import CardTest from './card-test'

describe('card for test page', () => {
  it('card-test  render', () => {
    render(<CardTest title={''} description={''} question={''} chose_test={''} lists={[]} onChange={undefined} />)
  })
})
