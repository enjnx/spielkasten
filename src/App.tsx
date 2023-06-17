import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './css/header.css';
import './css/nav.css';
import './css/main.css';
import logo from './img/logo.svg';
import Mitarbeiter from "./pages/Mitarbeiter";
import User from "./pages/User";

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
          <Link to="/page/mitarbeiter">Mitarbeiter</Link>
          <Link to="/page/user">User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/mitarbeiter" element={<Mitarbeiter />} />
          <Route path="/page/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
