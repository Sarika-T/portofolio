import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <HashRouter>
    <div className='App'>
      <Routes>
        <Route path= "/" element = {<MainPage />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
