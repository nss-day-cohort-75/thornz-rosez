import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import "./Login.css"
import { getUserByEmail } from "../../services/userService"

export const Login = () => {
  const [email, set] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        if (password === user.password) {
          localStorage.setItem(
            "learning_user",
            JSON.stringify({
              id: user.id,
            })
          )

          navigate("/")
        } else {
          window.alert("Invalid login")
        }
      }
    })
  }

  return (
    <main className="auth-container">
      <section>
        <form className="auth-form" onSubmit={handleLogin}>
          <h1 className="header">Login</h1>
          <fieldset className="auth-fieldset login-fieldsets">
            <div className="input-fields">
              <h2>Email</h2>
              <input
                type="email"
                value={email}
                className="auth-form-input"
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset login-fieldsets">
            <div className="input-fields">
              <h2>Password</h2>
              <input
                type="password"
                value={password}
                className="auth-form-input"
                onChange={(evt) => setPassword(evt.target.value)}
                placeholder="Password"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset login-fieldsets member-sign-in">
            <section className="register-link">
              <Link to="/register">Not a member yet?</Link>
            </section>
            <div>
              <button className="auth-btn" type="submit">Sign in</button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  )
}

