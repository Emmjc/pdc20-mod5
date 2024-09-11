import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the required router components
import './App.css';
import LogAdmin from './Dashboard/LogAdmin'; // Import your LogAdmin component
import AuthError from './Dashboard/AuthError'; // Import your AuthError component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route to LogAdmin component */}
          <Route path="/" element={<LogAdmin />} />
          
          {/* Route to display the AuthError component */}
          <Route path="/auth-error" element={<AuthError />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
