import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const GITHUB_URL = 'https://github.com';
const OAUTH_CLIENT = 'fea016b8dcb02c029817'; // identificador da aplicação

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function login(e: FormEvent) {
    e.preventDefault();

    if (username === 'heyitoria.lopes@gmail.com' && password === '1234') {
      return navigate('/main');
    }

    alert('Credenciais incorretas. Tente novamente. ');
  }

  return (
    <form onSubmit={login}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Login'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button type='submit'>Login</button>
      <a href={`${GITHUB_URL}/login/oauth/authorize?client_id=${OAUTH_CLIENT}`}>
        Login com GitHub
      </a>
    </form>
  );
}

export default Login;
