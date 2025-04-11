import React from 'react';
import './i18n';
import './App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const MyComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="lang-switcher">
      <h1>{t('welcome')}</h1>
      <div className="button-group">
        <button onClick={() => i18n.changeLanguage('hi')}>हिन्दी</button>
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <MyComponent />

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


