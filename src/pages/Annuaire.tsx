import profil from '../data/users.json'
import { Link } from 'react-router-dom'
import "../css/Annuaire.css"


function Annuaire() {
    return (
        <>
            <section className="accueil-column annuaire">
                <h1 className="accueil-titre">Users</h1>
                {profil.users.map((user) =>
                    <div className="carte carte-recette">
                        <img src={user.image} alt={user.username} className="carte-image" />
                        <div>
                            <p className="carte-nom">{user.username}</p>
                            <Link to={`/user/${user.id}`} className="carte-lien">← Voir le profil</Link>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Annuaire;