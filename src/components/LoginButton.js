import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button 
      className="blue"
      onClick={() => loginWithRedirect()}
    >
      Connexion
    </button>
  )
}

export default LoginButton;
