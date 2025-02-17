import { TipusList } from './TipusList';
import { TipusSingle } from './TipusSingle';
import { TipusCreate } from './TipusCreate';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Eszközök</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-tipus">Új típus</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<TipusList />} />
        <Route path="/tipus/:tipusId" element={<TipusSingle />} />
        <Route path="/create-tipus" element={<TipusCreate />} />
      </Routes>
    </Router>
  );
};
