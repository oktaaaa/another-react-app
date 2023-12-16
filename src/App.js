import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import routes from './route';
import Cookies from 'js-cookie';
import Login from './Auth/Login';

function App() {
  const Home = React.lazy(() => import('./Home'))
  const AuthLogin = React.lazy(() => import('./Auth/Login'))

  const LoginRoute = (props) => {
    if (Cookies.get('token')== undefined ){
      return <Navigate to = {'/login'}/>
    } else{
      return props.children
    }
  }
  return (
    <Suspense fallback = {<div>Loading...</div>}>
      <div className='App'>
        <h1>Universitas MDP</h1>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <NavLink to = '/'
            className='nav-link'>
              Home
            </NavLink>
          </li>

          {!Cookies.get('token') && <li className='nav-item'>
            <NavLink to = '/login'
            className='nav-link'>
              Login
            </NavLink>
          </li>}

          {Cookies.get('token') && <li className='nav-item'>
            <NavLink to = '/fakultas'
            className='nav-link'>
              Fakultas
            </NavLink>
          </li>}

          {Cookies.get('token') && <li className='nav-item'>
            <NavLink to = '/prodi'
            className='nav-link'>
              Prodi
            </NavLink>
          </li>}

          {Cookies.get('token') && <li className='nav-item'>
            <NavLink 
            onClick={() => {
              Cookies.remove('token') 
              window.location.href = '/login'
            }}

            className='nav-link'>
              Logout
            </NavLink>

          </li>}

        </ul>
        {/* Main content */}
        <div className='row'>
            <div className='col'>
              <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/login' element = {<AuthLogin/>} />

                {routes.map((route, i) =>{
                  const {path, Component} = route
                  return <Route key = {i} path= {path} element= {<LoginRoute> <Component/></LoginRoute>}/>
                })}
              </Routes>
            </div>
          </div>
      </div>
    </Suspense>
  );
}

export default App;
// ok