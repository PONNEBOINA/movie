import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const {searchInput} = props
  const changeSearch = e => {
    searchInput(e.target.value)
  }
  return (
    <nav className="header-container">
      <Link to="/">
        <h1 className="text1">movieDB</h1>
      </Link>
      <ul className="ul">
        <Link to="/">
          <li className="li">
            <p className="text">Popular</p>
          </li>
        </Link>
        <Link to="/top-rated">
          <li className="li">
            <h1 className="text">Top Rated</h1>
          </li>
        </Link>
        <Link to="/upcoming">
          <li className="li">
            <p className="text">Upcoming</p>
          </li>
        </Link>
      </ul>
      <div className="search-container">
        <input type="search" placeholder="search" onChange={changeSearch} />
        <button className="btn" type="button">
          Search
        </button>
      </div>
    </nav>
  )
}

//

export default withRouter(Header)
