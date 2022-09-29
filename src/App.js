import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Nav from './components/nav/Nav';
import { createContext, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Footer from './components/footer/Footer';

export const AuthContext = createContext(null);

function App() {

  const [token, setToken, unsetToken] = useLocalStorage('token')

  return (
    <AuthContext.Provider value={{ token, setToken, unsetToken }}>
      <div className="App">
        <Nav />
        <nav>
          <Link to="/login">login</Link>
        </nav>
        <div>
          <h1 className='main-title'>
            Next Song
          </h1>
        </div>
        <Outlet />
      </div>
      {/* get below image to display on main page - also need to import above */}
      {/* <img
        className='crowd-main-image'
        src={crowdMain}
      /> */}
      <div className='footer' >
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
