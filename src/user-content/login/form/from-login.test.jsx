import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Button from '../../../ui-library/button-click/button'
import Form from './form-login'
describe('form render', () => {
  /**CHECK FORM RENDER */
  it('check form render', () => {
    render(
      <BrowserRouter>
        <Form onSubmit={undefined} />
      </BrowserRouter>
    )
  })
  /** CHECK INPUT RENDER */
  it('check input render', () => {
    render(
      <BrowserRouter>
        <Form onSubmit={undefined} />
      </BrowserRouter>
    )
    const textbox = screen.getByRole('textbox')

    expect(textbox).toBeInTheDocument()
  })
  it('check label text', () => {
    render(
      <BrowserRouter>
        <Form onSubmit={undefined} />
      </BrowserRouter>
    )
    const textbox = screen.getByText('Password')
    const textemail = screen.getByText('Email address')
    expect(textbox && textemail).toBeInTheDocument()
  })
  /**RENDER CHECK BUTTON */
  it('check button', () => {
    render(
      <BrowserRouter>
        <Form onSubmit={undefined} />
      </BrowserRouter>
    )
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
  /** SHOULD DISPLAY MATCHING ERROR WHEN INVALID PASS AND EMAIL */
  it('should display matching error when invalid password and email', async () => {
    const mockOnSubmit = jest.fn()

    render(<Button type='submit' text='submit' />, {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <Form onSubmit={mockOnSubmit}>{children}</Form>
        </BrowserRouter>
      ),
    })
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test',
      },
    })

    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: 'pass',
      },
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(await screen.findAllByRole('alert')).toHaveLength(2)
    expect(mockOnSubmit).not.toBeCalled()
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test')
    expect(screen.getByLabelText('Password').value).toBe('pass')
  })

  /** SHOULD NOT DISPLAY ERROR WHEN VALUE IS VALID*/

  it('should not display error when value is valid', async () => {
    const mockOnSubmit = jest.fn()
    render(<Button type='submit' text='submit' />, {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <Form onSubmit={mockOnSubmit}>{children}</Form>
        </BrowserRouter>
      ),
    })
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test@mail.com',
      },
    })
    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: '1234567890',
      },
    })
    fireEvent.submit(screen.getByRole('button'))
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0))
    expect(screen.queryByText('Email not Correct')).not.toBeInTheDocument()
    expect(screen.queryByText('Empty Field')).not.toBeInTheDocument()
    waitFor(() => expect(mockOnSubmit).toBeCalledWith('test@mail.com', '1234567890'))
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test@mail.com')
    expect(screen.getByLabelText('Password').value).toBe('1234567890')
  })

  /** SHOULD DISPLAY REQUIRED ERROR WHEN VALUE IS INVALID*/

  it('should display required error when value is invalid', async () => {
    const mockOnSubmit = jest.fn()

    render(<Button type='submit' text='submit' />, {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <Form onSubmit={mockOnSubmit}>{children}</Form>
        </BrowserRouter>
      ),
    })
    fireEvent.submit(screen.getByRole('button'))
    expect(await screen.findByText('Email not Correct')).toBeInTheDocument()
    expect(await screen.findByText('Empty Field')).toBeInTheDocument()
    expect(await screen.findAllByRole('alert')).toHaveLength(2)
    expect(mockOnSubmit).not.toBeCalled()
  })
})
