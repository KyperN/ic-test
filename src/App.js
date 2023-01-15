import NavigationBar from './components/NavBar/NavBar';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import { useSelector } from 'react-redux';

function App() {
  const { isAuth, user } = useSelector((state) => state.user);

  return (
    <div className="App">
      <NavigationBar />
      <AppRouter isAuth={isAuth} user={user} />
    </div>
  );
}

export default App;
