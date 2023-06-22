import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './css/header.css';
import './css/nav.css';
import './css/main.css';
import './css/grid.css'
import logo from './img/logo.svg';
import Foto from "./pages/Foto";
import Todos from "./pages/Todos";

function Home() {
  return (
    <div className="main">
      <h1>Home</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
      </header>

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page/foto">Foto</Link>
          <Link to="/page/todos">Todos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/foto" element={<Foto />} />
          <Route path="/page/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
