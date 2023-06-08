import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './layout/pages/Dashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout/>}></Route>
          <Route index element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
