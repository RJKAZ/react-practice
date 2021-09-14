import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Loop from './components/Loop';
import UpdateData from './components/UpdateData';
import Alert from './components/Alert';
import AddNums from './components/AddNums';
import GithubUser from './components/GithubUser';
import Counter from './components/Counter';
import SearchList from './components/SearchList';
import Toggle from './components/Toggle';
import DateValidation from './components/DateValidation';
import Scroll from './components/Scroll';
import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/loop' component={Loop} />
          <Route path='/update' component={UpdateData} />
          <Route path='/alert' component={Alert} />
          <Route path='/addnums' component={AddNums} />
          <Route path='/github' component={GithubUser} />
          <Route path='/counter' component={Counter} />
          <Route path='/searchHeros' component={SearchList} />
          <Route path='/toggle' component={Toggle} />
          <Route path='/date' component={DateValidation} />
          <Route path='/scroll' component={Scroll} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
