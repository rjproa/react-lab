import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'
import { test, expect } from 'vitest'

test('renders content', () => {
  const note = {
    content: 'Componente de testeo hecho con react-testing-library',
    important: true
  }

  render(<Note note={note}></Note>)

  const element = screen.getByText('Componente de testeo hecho con react-testing-library')

  // muestra en terminal el elemento 'element' que esta siendo renderizado
  screen.debug(element)

  expect(element).toBeDefined()
})




test ('Click the button calls event handler once', async () => {
  const note = {
    content: 'Componente de testeo hecho con react-testing-library',
    important: true
  }

  const mockHandler = vi.fn()

  render(<Note note={note} toggleImportance={mockHandler} ></Note>)

  // Se crea un usuario simulado
  const user = userEvent.setup()

  // Se busca un elemento que tenga este texto
  const button = screen.getByText('make not important')
  
  // Se simula el click de un usuario
  await user.click(button)

  // Revisa si la función mockHandler se llamó una vez
  expect(mockHandler.mock.calls).toHaveLength(1)
})