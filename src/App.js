import NavigationBar from './components/NavBar/NavBar';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AppRouter />
    </div>
  );
}

export default App;
