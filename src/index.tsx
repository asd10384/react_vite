import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Main from './tsx/Main';
import Notfound from "./tsx/Notfound";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main />} />
    </Routes>
    <Notfound />
  </BrowserRouter>
);