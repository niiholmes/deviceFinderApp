import React from 'react';
import HomePage from './Pages/HomePage'
import './App.css';
import SignIN from './Pages/signIN';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './Pages/About'
import SignUP from './Pages/SignUP'
import Contact from './Pages/Contact'
import Layout from './Layout'
import DashBoard from './Pages/DashBoard'


const AppRoutes=()=>{
  return(
  <Switch>
      <Layout>
        <Route path='/' exact>
        <HomePage/>
        </Route>
        <Route path='/about'>
        <About/>
        </Route>
        <Route path='/create-an-account'>
        <SignUP/>
        </Route>
        <Route path='/sign-in'>
        <SignIN/>
        </Route>
        <Route path='/contact-me'>
        <Contact/>
        </Route> 
        <Route path='/dashboard'>
        <DashBoard/>
        </Route>        
      </Layout>
  </Switch>
  )
}
function App() {
  return (
    <div>
      <Router>
        <Switch>
        <AppRoutes/>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
