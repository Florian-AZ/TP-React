import { Link } from 'react-router'
import "./Navbar.css"

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <nav aria-label="Navigation D'accueil">
          <ul className="navbar-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Annuaire">Annuaire</Link></li>
            <li><Link to="/recette">Recettes</Link></li>
            <li><Link to="/Connexion">Connexion</Link></li>
            <li><Link to="/Profil">Profil</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header