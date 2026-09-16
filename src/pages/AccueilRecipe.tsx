import { useParams, useNavigate } from 'react-router'
import dataRecipe from '../data/recipes.json' 
import "../css/AccueilRecipe.css"

function Recette() {
    const { id } = useParams<{ id: string }>()
    const recette = dataRecipe.recipes.find((r) => r.id === Number(id))
    const navigate = useNavigate()
    if (!recette) {
        return <p className="recette-introuvable">Recette introuvable</p>
    }


    return (
        <div className="recette">
            <div className="carte-recette-detail">
                <h1 className="recette-nom">{recette.name}</h1>
                <img className="recette-image" src={recette.image} alt={recette.name} />

                <h2 className="recettte-sous-titre">Ingrédients</h2>
                <ul className="recette-liste">{recette.ingredients.map((ingredient) => <li>{ingredient}</li>)}
                </ul>

                <h2 className="recette-sous-titre">Étapes</h2>
                <ul className="recette-liste">
                    {recette.instructions.map((etape) => <li>{etape}</li>)}
                </ul>

                <button className="recette-retour" onClick={() => navigate(-1)}>⬅ Retour</button>
            </div>
        </div>
    )
}

export default Recette