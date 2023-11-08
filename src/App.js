import {Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import MyMoves from './components/MyMoves'
// we can also make it with very security by protectedComponent
const App = (
  <Switch>
    <Route path="/login" component={Login} />

    <Route exact path="/my-moves" component={MyMoves} />
  </Switch>
)

export default App
