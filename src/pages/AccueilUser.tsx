import { useParams, useNavigate } from 'react-router'
import dataProfil from '../data/users.json'
import "../css/AccueilUser.css"

function Utilisateur() {
    const { id } = useParams<{ id: string }>()
    const user = dataProfil.users.find((u) => u.id === Number(id))
    const navigate = useNavigate()
    if (!user) {
        return <p className="utilisateur-introuvable">Utilisateur introuvable</p>
    }


    return (
        <div className="utilisateur">
            <div className="carte-utilisateur">
                <img className="utilisateur-image" src={user.image} alt={user.username} />
                <h1 className="utilisateur-nom">{user.username}</h1>
                <button className="utilisateur-retour" onClick={() => navigate(-1)}>⬅ Retour</button>
            </div>
        </div>
    )
}

export default Utilisateur