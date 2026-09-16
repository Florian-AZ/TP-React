import data from '../data/users.json';
import { useNavigate } from 'react-router-dom';


function Connexion() {
    const navigate = useNavigate()

    function seConnecter() {
        const username = (document.getElementById('username') as HTMLInputElement).value
        const password = (document.getElementById('password') as HTMLInputElement).value
        const user = data.users.find((u) => u.username === username && u.password === password)
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
            <input id="password" type="password" placeholder="Mot de passe" />
            <button onClick={seConnecter}>Se connecter</button>
        </div>
    )
}

export default Connexion