import {Link} from 'react-router-dom'

const EachVideo = props => {
  const {videosDetails} = props
  const {id, posterPath, title, releaseDate, voteAverage} = videosDetails
  return (
    <li>
      <img src={posterPath} alt={title} />
      <div>
        <h1>{title}</h1>

        <p>{releaseDate}</p>

        <>
          <p>{voteAverage}</p>
        </>
      </div>
      <Link to={`/movie/${id}`}>
        <button type="button">View Details</button>
      </Link>
    </li>
  )
}
export default EachVideo
