import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import ResultPage from './Pages/ResultPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Demo from './Pages/Demo';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="result" element={<ResultPage/> }></Route>
      <Route path="demo" element={<Demo/> }></Route>
      </Routes>
  </BrowserRouter>
  
    
    </>
  );
}

export default App;
