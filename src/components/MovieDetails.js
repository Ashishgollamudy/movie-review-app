import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IMG_API } from "../constants/url";
import MovieSearch from "./MovieSearch";
import { getReleaseDate, getReleaseYear } from "../utils/date";
import MovieRating from "./MovieRating";

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state;
  const releaseYear = getReleaseYear(movie.release_date);
  const formattedReleaseDt = getReleaseDate(movie.release_date);

  return (
    <>
      <MovieSearch />
      <MovieDetailsContainer>
        <StyledPoster
          src={`${IMG_API}${movie.poster_path}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/no-poster.png";
          }}
        />
        <StyledMovieInfoContainer>
          <h3>
            {movie.original_title.toUpperCase()} ({releaseYear})
          </h3>
          <p>{movie.overview}</p>
          <p>Release date: {formattedReleaseDt || "N/A"}</p>
          <MovieRating rating={movie.vote_average}>Average rating</MovieRating>
        </StyledMovieInfoContainer>
      </MovieDetailsContainer>
    </>
  );
};

const StyledPoster = styled.img`
  height: 100%;
  width: 300px;
`;

const MovieDetailsContainer = styled.div`
  border: 1px solid #36454f;
  border-radius: 10px;
  width: 75%;
  height: 400px;
  margin: 100px 0 0 50px;
  padding: 10px;
  color: #36454f;

  display: flex;
`;

const StyledMovieInfoContainer = styled.div`
  padding: 10px;
`;

export default MovieDetails;
