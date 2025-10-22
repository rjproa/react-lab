import { render, screen } from '@testing-library/react'
import Note from './Note'
import { test, expect } from 'vitest'

test('renders content', () => {
  const note = {
    content: 'Componente de testeo hecho con react-testing-library',
    important: true
  }

  render(<Note note={note}></Note>)

  const element = screen.getByText('Componente de testeo hecho con react-testing-library')
  expect(element).toBeDefined()
})