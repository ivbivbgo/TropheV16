import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landing/LandingPage';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/auth/LoginPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<Dashboard activeTab="news" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;