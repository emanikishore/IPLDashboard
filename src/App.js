import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import LatestMatch from './components/LatestMatch'
import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'
import TeamCard from './components/TeamCard'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)

export default App
