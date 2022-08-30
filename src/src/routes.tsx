import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
