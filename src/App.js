import React, { useState,useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Authcontext from './Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(()=>{
    const storage = localStorage.getItem('isloggedin');
    if(storage==='1'){
      setIsLoggedIn(true);
    }
  },[]);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isloggedin','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isloggedin');

    setIsLoggedIn(false);
  };

  return (
    <Authcontext.Provider value={{
      isLoggedin:isLoggedIn,
      onLogout:logoutHandler
     } }>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </Authcontext.Provider>  );
}

export default App;
