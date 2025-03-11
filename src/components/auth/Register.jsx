import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../../services/userService"

export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    businessName: "",
    password: "",
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "customer",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateUser = (evt) => {
    const copy = { ...user }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
    <main className="auth-container">
      <form className="auth-form" onSubmit={handleRegister}>
        <h1 className="header">Register</h1>
        <fieldset className="auth-fieldset login-fieldsets">
          <div>
            <h2>Name</h2>
            <input
              onChange={updateUser}
              type="text"
              id="name"
              className="auth-form-input"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset login-fieldsets">
          <div>
            <h2>Business Name</h2>
            <input
              onChange={updateUser}
              type="text"
              id="businessName"
              className="auth-form-input"
              placeholder="Enter your business name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset login-fieldsets">
          <div>
            <h2>Email</h2>
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="auth-form-input"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset login-fieldsets">
          <div>
            <h2>Password</h2>
            <input
              onChange={updateUser}
              type="password"
              id="password"
              className="auth-form-input"
              placeholder="Password"
              required
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset login-fieldsets">
          <div>
            <button className="auth-btn" type="submit">Register</button>
          </div>
        </fieldset>
      </form>
    </main>
  )
}
