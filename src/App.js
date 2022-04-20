import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './routes/home/home';
import Navigation from './components/navigation/Navigation';
import './categories.scss';
import SignIn from './routes/sign-in/signIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
