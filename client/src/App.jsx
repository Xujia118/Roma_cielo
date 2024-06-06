import LoginForm from "./components/LoginForm";

import { fetchLogin } from "./services";

function onLogin(username) {
  fetchLogin(username)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function App() {
  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default App;
