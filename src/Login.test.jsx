import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import { loginUser } from './access'

vi.mock('./access', () => ({
  registerUser: vi.fn(),
  loginUser: vi.fn(),
  loginWithGoogle: vi.fn(),
}))

async function fillAndSubmit(user, container, password) {
  await user.type(screen.getByRole('textbox'), 'andy@mail.com')
  await user.type(container.querySelector('input[type="password"]'), password)
  await user.click(screen.getByRole('button', { name: 'Login' }))
}

describe('Login', () => {
  it('starts in login mode', () => {
    render(<Login />)
    expect(screen.getByText(/login to see the earthquakes/i)).toBeInTheDocument()
  })

  it('calls loginUser with the typed email and password', async () => {
    loginUser.mockResolvedValue({})
    const user = userEvent.setup()
    const { container } = render(<Login />)
    await fillAndSubmit(user, container, 'secret123')
    expect(loginUser).toHaveBeenCalledWith('andy@mail.com', 'secret123')
  })

  it('shows an error message when login fails', async () => {
    loginUser.mockRejectedValue(new Error('auth/invalid-credential'))
    const user = userEvent.setup()
    const { container } = render(<Login />)
    await fillAndSubmit(user, container, 'wrongpass')
    expect(await screen.findByText(/invalid-credential/i)).toBeInTheDocument()
  })

  it('switches to register mode', async () => {
    const user = userEvent.setup()
    render(<Login />)
    await user.click(screen.getByRole('button', { name: /no account\? register/i }))
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
  })
})
