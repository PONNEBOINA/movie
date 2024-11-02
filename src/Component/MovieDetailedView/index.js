import {Component} from 'react'

import Header from '../Header'

// const apicontext = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inprogress: 'IN_PROGRESS',
// }

class MovieDetailedView extends Component {
  componentDidMount() {
    this.getPopularView()
  }

  getPopularView = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1b57c7615c5df62fef676d18a32b0fc8&language=en-US`
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)

    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default MovieDetailedView
