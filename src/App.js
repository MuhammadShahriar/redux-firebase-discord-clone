import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Chat from './Chat';
import { login, selectUser, logout } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch((login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        })))
      }
      else {
        dispatch(logout());
      }
    })
    
    
  }, [{dispatch, auth}])

  return (
    <div className="app">
      {user? (
        <>
         <Sidebar />
         <Chat />
        </>
      ) : (
        <Login />
      )}
     
    </div>
  );
}

export default App;
