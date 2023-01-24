import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import HomeScreen from './Components/HomeScreen';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        //Logged in
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,         
        }))
      } else {
        //Logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [ dispatch])
  return (
    <div className="app">
      {
        !user ?
        <Login />:
        <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact  path='/profile' element={<Profile/>}/>
        <Route />
      </Routes>

      }
    </div>
  );
}

export default App;
