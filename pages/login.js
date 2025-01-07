import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>
  }

  if (session) {
    router.push('/admin')
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    })

    if (result.error) {
      setError('Invalid username or password')
    } else {
      // Set a cookie to remember the user's authentication
      Cookies.set('isAdminAuthenticated', 'true', { expires: 1 }) // Expires in 1 day
      router.push('/admin')
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Admin Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className="alert alert-danger" role="alert">{error}</div>
              )}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}