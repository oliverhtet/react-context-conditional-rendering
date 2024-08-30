import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { AuthProvider } from './context/AuthContext';
import Greeting from './components/Greeting';

function App() {
  return (
    <AuthProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Greeting />
        <LoginButton />
        <LogoutButton />
      </div>
    </AuthProvider>
  );
}

export default App;
