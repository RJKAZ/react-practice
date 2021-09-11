import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Loop from './components/Loop';
import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/loop" component={Loop}/>
      </Switch>
      </BrowserRouter>

    </Fragment>
   
  );
}

export default App;
