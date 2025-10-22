import { useState } from "react"

const LoginForm = ({ handleLogin }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = Event => {
    Event.preventDefault()

    handleLogin({
      username: username,
      password: password
    })

    setUsername('')
    setPassword('')

  }


  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username <input value={username} onChange={Event => setUsername(Event.target.value)} />
        </div>
        <div>
          password <input type="password" valur={password} onChange={Event => setPassword(Event.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default LoginForm