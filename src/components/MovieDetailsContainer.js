import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";
import MovieSearch from "./MovieSearch";

const MovieDetailsContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const location = useLocation();
  const { movie } = location.state;

  return (
    <>
      <MovieSearch />
      {isSubmitted ? (
        <MovieReviewSuccess>
          <p>
            You have successfully submitted your review for:
            <b> {movie.title}</b>
          </p>
          <Link to="/">Return to home</Link>
        </MovieReviewSuccess>
      ) : (
        <MovieDetails onSubmit={() => setIsSubmitted(true)} movie={movie} />
      )}
    </>
  );
};

const MovieReviewSuccess = styled.div`
  border: 1px solid #36454f;
  border-radius: 5px;
  height: 100px;
  padding: 10px;
  background-color: #7de591;
  width: 80%;
  margin: 100px 0 0 100px;

  @media only screen and (max-width: 400px) {
    margin: 100px 0 0 20px;
  }
`;

export default MovieDetailsContainer;
