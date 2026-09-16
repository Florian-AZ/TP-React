import data from '../data/users.json';
import { useNavigate } from 'react-router-dom';


function Connexion() {
    const navigate = useNavigate()

    function seConnecter() {
        const username = (document.getElementById('username') as HTMLInputElement).value
        const user = data.users.find((u) => u.username === username)
        if (user) {
            navigate(`/profil/${user.id}`)
        } else {
            alert("Identifiants incorrects")
        }
    }
    return (

        <div>
            <h1>Connexion</h1>
            <input id="username" type="text" placeholder="Username" />
            <button onClick={seConnecter}>Se connecter</button>
        </div>
    )
}

export default Connexion