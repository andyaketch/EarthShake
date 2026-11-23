import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { registerUser, loginUser, logoutUser } from './access'
import { auth } from './firebase'

vi.mock('./firebase', () => ({ auth: { fake: 'auth' } }))
vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn(),
}))

describe('access', () => {
  it('registerUser creates an account with email and password', async () => {
    createUserWithEmailAndPassword.mockResolvedValue({})
    await registerUser('a@b.com', 'pw123456')
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, 'a@b.com', 'pw123456')
  })

  it('loginUser signs in with email and password', async () => {
    signInWithEmailAndPassword.mockResolvedValue({})
    await loginUser('a@b.com', 'pw123456')
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'a@b.com', 'pw123456')
  })

  it('logoutUser signs the user out', async () => {
    signOut.mockResolvedValue()
    await logoutUser()
    expect(signOut).toHaveBeenCalledWith(auth)
  })
})
