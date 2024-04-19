import './AboutUs.css'
import NavBar from "./NavBar.tsx";

function AboutUs() {
    return (
        <div className="about-us">
            <NavBar/>
            <div>
                <h1>About Us</h1>
                <p>Welcome to our Movie Database! We are passionate movie enthusiasts dedicated to providing you with a
                    comprehensive collection of movies from various genres and eras.</p>
                <p>Our mission is to create a platform where movie lovers can explore, discover, and enjoy their
                    favorite films. Whether you're into classic cinema, indie flicks, or the latest blockbusters, we've
                    got you covered.</p>
                <p>At our Movie Database, you can:</p>
                <ul>
                    <li>Search for movies by title, genre, director, or actor.</li>
                    <li>Read detailed information about each movie, including plot summaries, cast and crew details,
                        ratings, and reviews.
                    </li>
                    <li>Watch trailers and clips to get a glimpse of the movie before watching.</li>
                    <li>Keep track of your favorite movies and create personalized watchlists.</li>
                    <li>Stay updated with the latest movie releases and industry news.</li>
                </ul>
                <p>Whether you're a casual moviegoer or a die-hard cinephile, we hope our Movie Database becomes your
                    go-to destination for all things related to cinema. Sit back, relax, and enjoy the magic of
                    movies!</p>
            </div>
        </div>
    )
}

export default AboutUs