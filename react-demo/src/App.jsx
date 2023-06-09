import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import './scss/App.scss';
import Blank from './pages/Blank';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Blank />} />
            <Route path="products" element={<Blank />} />
            <Route path='customers' element={<Blank />} />
            <Route path='settings' element={<Blank />} />
            <Route path='stats' element={<Blank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
