import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

function Connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      navigate(`/profil/${user.id}`, { state: { user: user } });
    } else {
      setErreur("Identifiants incorrects");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="connexion">
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se connecter</button>
      {erreur && <p className="erreur">{erreur}</p>}
    </form>
  );
}

export default Connexion;