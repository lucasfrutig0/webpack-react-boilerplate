import { render, screen } from '@testing-library/react'
import { App } from 'App'

describe('teste', () => {
  it('test test', () => {
    render(<App />)
    expect(screen.getByText(/webpack react template/i)).toBeInTheDocument()
  })
})
