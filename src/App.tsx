import { useState } from 'react';
import './App.css';
const API_URL = 'https://localhost:8080?login';

function App() {
  const [loginMessage, setLoginMessage] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async (username: string, password: string) => {
    console.log('username->' + username + ', password->' + password);
    console.log(API_URL + '&username=' + username + '&password=' + password);
    const response = await fetch(
      API_URL + '&username=' + username + '&password=' + password
    );
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setLoginMessage(data.Search);
  };

  return (
    <>
      <h3>Login Page</h3>
      <form className="card">
        <tr>
          <td>
            <label>Username</label>:{' '}
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Password</label>:{' '}
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label></label>
            <input
              type="submit"
              name="login"
              onClick={() => login(username, password)}
            />
          </td>
        </tr>
      </form>

      {loginMessage?.length > 0 ? (
        <div className="container">{loginMessage}</div>
      ) : (
        <div className="empty">
          <h2>{loginMessage}</h2>
        </div>
      )}
    </>
  );
}

export default App;
