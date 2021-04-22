import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Home} from './Components/Home';
import {Posts} from './Components/Posts';
import {Signin} from './Components/Signin';
import {NotFound} from './Components/NotFound';
import {Post} from './Components/Post';
import { Dashboard} from './Components/Dashboard';
import {Privateroute} from './routes/Privateroute';

function App() {
  return (
    <BrowserRouter>
           <div style={{backgroundColor:'lightblue'}}>NavBar</div>

      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
        <Privateroute exact path="/dashboard" component={Dashboard} />
        <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
