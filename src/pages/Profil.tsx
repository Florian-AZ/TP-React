import { useParams } from 'react-router'
import data from '../data/users.json'

function Profil() {
  const { id } = useParams<{ id: string }>()
  const user = data.users.find((u) => u.id === Number(id))

  if (!user) {
    return <p>Utilisateur introuvable</p>
  }

  return (
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
  )
}

export default Profil