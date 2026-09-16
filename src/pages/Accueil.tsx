import profil from '../data/users.json'
import recipe from '../data/recipes.json'
import { Link } from 'react-router-dom'
import "../css/Accueil.css"


function Accueil() {
    return (
        <div className="accueil">
            <h1 className="carte-nom-Accueil">Florian Azria</h1>
            <section className="accueil-column">
                <h2 className="accueil-titre">Recettes</h2>
                {recipe.recipes.map((r) =>
                    <div className="carte carte-recette">
                        <img src={r.image} alt={r.name} className="carte-image" />
                        <div>
                            <p className="carte-nom">{r.name}</p>
                            <p className="carte-info">🕐 {/*Symbol Horloge récupérer sur https://www.compart.com/fr/unicode/U+1F550*/} {r.prepTimeMinutes} min</p>
                            <Link to={`/recipe/${r.id}`} className="carte-lien">Voir la recette →</Link>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Accueil;