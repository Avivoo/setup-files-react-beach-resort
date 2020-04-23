import React from 'react';
import {Route,Switch} from "react-router-dom"
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import Books from './pages/Books'
import SingleBook from './pages/SingleBook'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/books/" component={Books}/>
      <Route exact path="/books/:slug" component={SingleBook}/>
      <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
