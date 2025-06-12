import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Offers from './pages/Offers';
import OfferDetail from './pages/OfferDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import AIAssistant from './pages/AIAssistant';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/offer/:id" element={<OfferDetail />} />
              <Route path="/last-minute" element={<Offers />}  />
              <Route path="/seasonal" element={<Offers />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;