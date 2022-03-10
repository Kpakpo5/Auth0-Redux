import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/user";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  const handleClick = () => {
    logout({ returnTo: window.location.origin });
    dispatch(userLogout());
  }

  return (
    <button 
      className="red"
      onClick={handleClick}
    >
      Déconnexion
    </button>
  )
}

export default LogoutButton;
