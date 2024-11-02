import {Component} from 'react'

import EachVideo from '../EachVideo'

import Header from '../Header'

const apicontext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class TopRated extends Component {
  state = {topRated: [], apiStatus: apicontext.initial}

  componentDidMount() {
    this.getRatedView()
  }

  getRatedView = async (page = 1) => {
    this.setState({apiStatus: apicontext.inprogress})
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=1b57c7615c5df62fef676d18a32b0fc8&language=en-US${page}`
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)

    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = await data.results.map(each => ({
        adult: each.adult,
        backdropPath: each.backdrop_path,
        id: each.id,
        originalLanguage: each.original_language,
        originalTitle: each.original_title,
        overview: each.overview,
        popularity: each.popularity,
        posterPath: `https://image.tmdb.org/t/p/w500${each.poster_path}`,
        releaseDate: each.release_date,
        title: each.title,
        video: each.video,
        voteAverage: each.vote_average,
        voteCount: each.vote_count,
      }))
      this.setState({topRated: fetchedData, apiStatus: apicontext.success})
    } else {
      this.setState({apiStatus: apicontext.failure})
    }
  }

  renderSuccessView = () => {
    const {topRated} = this.state
    return (
      <div>
        <ul>
          {topRated.map(each => (
            <EachVideo videosDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderTopRatedView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apicontext.success:
        return this.renderSuccessView()
      // case apicontext.failure:
      //   return this.renderFailureView()
      // case apicontext.inprogress:
      //   return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.renderTopRatedView()}</div>
      </div>
    )
  }
}

export default TopRated
