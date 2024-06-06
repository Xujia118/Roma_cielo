import { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(username);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
