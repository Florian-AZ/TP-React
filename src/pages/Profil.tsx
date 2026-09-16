import { useParams } from 'react-router'
import data from '../data/users.json'

function Profil() {
    const { id } = useParams<{ id: string }>()
    const user = data.users.find((u) => u.id === Number(id))
    const connecte = localStorage.getItem('userConnecte')  // ← ici

    if (!connecte) {
        return <p>Vous devez vous connecter</p>
    }

    const userConnecte = JSON.parse(connecte)
    {/*if (!user) {
        return
        alert < p > Utilisateur introuvable</p >
    }*/}

    {/*return (
        <div>
            <img src={user.image} alt={user.username} />
            <h1>{user.firstName} {user.lastName}</h1>

            <h2>Infos personnelles</h2>
            <p>Username : {user.username}</p>
            <p>Rôle : {user.role}</p>
            <p>Âge : {user.age}</p>
            <p>Genre : {user.gender}</p>
            <p>Date de naissance : {user.birthDate}</p>
            <p>Email : {user.email}</p>
            <p>Téléphone : {user.phone}</p>

            <h2>Adresse</h2>
            <p>{user.address.address}</p>
            <p>{user.address.postalCode} {user.address.city}</p>
            <p>{user.address.country}</p>

            <h2>Travail</h2>
            <p>Entreprise : {user.company.name}</p>
            <p>Département : {user.company.department}</p>
            <p>Poste : {user.company.title}</p>
        </div>
    )*/}
    return (
    <div>
      <img src={userConnecte.image} alt={userConnecte.username} />
      <h1>{userConnecte.firstName} {userConnecte.lastName}</h1>

      <h2>Infos personnelles</h2>
      <p>Username : {userConnecte.username}</p>
      <p>Rôle : {userConnecte.role}</p>
      <p>Âge : {userConnecte.age}</p>
      <p>Genre : {userConnecte.gender}</p>
      <p>Date de naissance : {userConnecte.birthDate}</p>
      <p>Email : {userConnecte.email}</p>
      <p>Téléphone : {userConnecte.phone}</p>

      <h2>Adresse</h2>
      <p>{userConnecte.address.address}</p>
      <p>{userConnecte.address.postalCode} {userConnecte.address.city}</p>
      <p>{userConnecte.address.country}</p>

      <h2>Travail</h2>
      <p>Entreprise : {userConnecte.company.name}</p>
      <p>Département : {userConnecte.company.department}</p>
      <p>Poste : {userConnecte.company.title}</p>
    </div>
  )
}

export default Profil