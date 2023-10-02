
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch >
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
