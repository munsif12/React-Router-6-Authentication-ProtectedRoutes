import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import NoMatch from './components/NoMatch';

import AuthProvider from './AuthProvider';
import ProtectedRoutes from './ProtectedRoutes';
import About from './components/About';
import KeepNotes from './components/KeepNotes';

const AuthContext = React.createContext();
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Navigation />{/* <-- acts like a middleware */}
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="/dashboard" element={
            <ProtectedRoutes >
              <Dashboard />
            </ProtectedRoutes>}
          />
          <Route path="/profile" element={
            <ProtectedRoutes >
              <Profile />
            </ProtectedRoutes>}
          />

          <Route path="/about" element={
            <ProtectedRoutes >
              <About />
            </ProtectedRoutes>}
          />
          <Route path="/notes" element={
            <ProtectedRoutes >
              <KeepNotes />
            </ProtectedRoutes>}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
export {
  AuthContext,
};