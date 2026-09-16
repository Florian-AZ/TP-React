import { Link } from 'react-router'
import "../css/ErreurIntrouvable.css"

function NotFound() {
  return (
    <div className="Introuvable">
      <h1 className="Introuvable-code">404</h1>
      <p className="Introuvable-texte">Page introuvable</p>
      <Link to="/" className="Introuvable-lien">← Retour à l'accueil</Link>
    </div>
  )
}

export default NotFound