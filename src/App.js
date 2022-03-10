import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from './redux/user';

import './App.css';

function App() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const userIsLoggedIn = useSelector((state) => state.user.value.isLoggedIn);

  useEffect(() => {
    if (isAuthenticated && user) dispatch(userLogin({name: user.name, picture:user.picture, email: user.email, isLoggedIn : true}))
  })

  return (
    <div className="app">
      {userIsLoggedIn ?(
        <LogoutButton />
      ):(
        <LoginButton />
      )}
      <Profile />
    </div>
  );
}

export default App;
