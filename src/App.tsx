import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Páginas
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Sobre } from './pages/Sobre';
import { Contact } from './pages/Contact'; // <--- Importamos a nova página

function App() {
  return (
    <BrowserRouter>
      <div className="container" style={{ minHeight: '80vh' }}>
        <Navbar />
        <div style={{ marginTop: '30px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contatos" element={<Contact />} /> {/* <--- Nova Rota criada */}
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;