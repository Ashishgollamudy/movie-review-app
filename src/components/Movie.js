import styled from "styled-components";
import { Link } from "react-router-dom";

import { IMG_API } from "../constants/url";
import MovieRating from "./MovieRating";

const Movie = ({ movie }) => {
  return (
    <StyledMovie>
      <StyledLink to={`/movie-details/${movie.id}`} state={{ movie }}>
        <StyledPoster
          src={`${IMG_API}${movie.poster_path}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/no-poster.png";
          }}
        />
        <StyledMovieInfo>
          <p>{movie.title}</p>
          <MovieRating rating={movie.vote_average} />
        </StyledMovieInfo>
        <StyledMovieOverView>
          <h2>Overview:</h2>
          <p>{movie.overview}</p>
        </StyledMovieOverView>
      </StyledLink>
    </StyledMovie>
  );
};

const StyledMovieOverView = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 5px;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  max-height: 100%;
  overflow: auto;
`;

const StyledMovie = styled.div`
  height: 400px;
  width: 250px;
  margin: 10px;
  background: #fff;
  border: 0.2px solid #36454f;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &:hover ${StyledMovieOverView} {
    transform: translateY(0%);
  }

  @media only screen and (max-width: 555px) {
    width: 300px;
  }
`;

const StyledPoster = styled.img`
  height: 90%;
  width: 100%;
`;

const StyledMovieInfo = styled.div`
  height: 10%;
  color: #36454f;
  padding: 5px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    margin-top: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Movie;
