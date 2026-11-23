import { render, screen, act } from '@testing-library/react'
import App from './App'
import { monitorAuthState } from './access'

vi.mock('./access', () => ({
  monitorAuthState: vi.fn(),
  logoutUser: vi.fn(),
}))
vi.mock('./Login', () => ({ default: () => <div>Login page</div> }))
vi.mock('./Quakes', () => ({ default: () => <div>Quakes list</div> }))

function renderApp() {
  let notify
  monitorAuthState.mockImplementation((callback) => {
    notify = callback
    return vi.fn()
  })
  render(<App />)
  return (user) => act(() => notify(user))
}

describe('App', () => {
  it('shows a checking message first', () => {
    renderApp()
    expect(screen.getByText(/checking who you are/i)).toBeInTheDocument()
  })

  it('shows the login page when nobody is signed in', () => {
    const signIn = renderApp()
    signIn(null)
    expect(screen.getByText('Login page')).toBeInTheDocument()
  })

  it('shows the dashboard when a user is signed in', () => {
    const signIn = renderApp()
    signIn({ email: 'andy@mail.com' })
    expect(screen.getByText('andy@mail.com')).toBeInTheDocument()
    expect(screen.getByText('Quakes list')).toBeInTheDocument()
  })
})
