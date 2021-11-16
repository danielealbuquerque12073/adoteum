import logo from './logo.svg';
import './App.css';
import{BrowserRouter} from 'react-router-dom';
import Header from './pages/header'
import AppRoutes from './routes';


function App() {
  return (
    <BrowserRouter >
      <Header/>
   <AppRoutes/>
    </BrowserRouter>
    
  );
}

export default App;
