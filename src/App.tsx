import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
      <div>
          <NavBar/>
          <div className="container">
              <h1>Welcome to the Movie Database</h1>
              <div className="card">
                  <h2>Discover</h2>
                  <p>Explore a vast collection of movies from various genres and eras.</p>
              </div>
              <div className="card">
                  <h2>Search</h2>
                  <p>Find movies by title, genre, director, or actor.</p>
              </div>
              <div className="card">
                  <h2>Watch Trailers</h2>
                  <p>Watch trailers and clips to get a glimpse of the movie before watching.</p>
              </div>
              <div className="card">
                  <h2>Stay Updated</h2>
                  <p>Stay informed with the latest movie releases and industry news.</p>
              </div>
          </div>
      </div>
  )
}

export default App
