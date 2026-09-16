import  dataRecipe from '../data/recipes.json'   
import { Link } from 'react-router-dom'
import "../css/ListeRecettes.css"


function ListeRecettes() {
    return (
        <section className="liste-recettes">
            <h1 className="liste-recettes-titre">Recettes</h1>
            {dataRecipe.recipes.map((r) =>
                <div className="liste-recettes-carte">
                    <img src={r.image} alt={r.name} className="liste-recettes-image" />
                    <div className="liste-recettes-texte">
                        <p className="liste-recettes-nom">{r.name}</p>
                        <Link to={`/recipe/${r.id}`} className="liste-recettes-lien">← Voir la recette   </Link>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ListeRecettes