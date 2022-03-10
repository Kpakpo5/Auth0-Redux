import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';

const Profile = () => {
  const { isLoading } = useAuth0();
  const appUser = useSelector((state) => state.user.value);
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  else if(appUser.isLoggedIn){
    return (
        <div>
          <img src={appUser.picture} alt={appUser.name} />
          <h2>{appUser.name}</h2>
          <p>{appUser.email}</p>
        </div>
    );
  }

  return <div>Vous n'êtes pas connecté .<br />Connectez-vous pour obtenir l'accès aux données .</div>
}
export default Profile;
