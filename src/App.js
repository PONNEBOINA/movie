import {Switch, Route} from 'react-router-dom'
import Popular from './Component/Popular'
import TopRated from './Component/TopRated'
import Upcoming from './Component/Upcoming'
import MovieDetailedView from './Component/MovieDetailedView'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={MovieDetailedView} />
    </Switch>
  </>
)

export default App
