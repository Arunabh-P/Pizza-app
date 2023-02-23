import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
