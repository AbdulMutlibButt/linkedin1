import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser)
  const auth = getAuth();
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in, dispatch the login action
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }
      else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>

      )}

      {/*{Widgets} */}
    </div>
  );
}

export default App;
