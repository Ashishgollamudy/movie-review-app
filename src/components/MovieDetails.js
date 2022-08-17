import styled from "styled-components";
import { IMG_API } from "../constants/url";
import { getReleaseDate, getReleaseYear } from "../utils/date";
import MovieRating from "./MovieRating";
import { AiFillHeart as HeartIcon } from "react-icons/ai";
import { useState } from "react";

const MovieDetails = ({ onSubmit, movie }) => {
  const [likeMovie, setLikeMovie] = useState(false);
  const [textReview, setTextReview] = useState("");

  const releaseYear = getReleaseYear(movie.release_date);
  const formattedReleaseDt = getReleaseDate(movie.release_date);

  function handleSubmit() {
    const noReview = !textReview.trim().length;
    if (noReview) {
      return alert("please add a review and hit submit...");
    }
    onSubmit();
  }

  return (
    <>
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
            <StyledLike
              onClick={() => setLikeMovie(!likeMovie)}
              $likemovie={likeMovie}
            />
          </h3>
          <p>{movie.overview}</p>
          <p>Release date: {formattedReleaseDt || "N/A"}</p>
          <MovieRating rating={movie.vote_average} label="Average rating" />
          <StyledTextArea
            rows="10"
            placeholder="Write you review..."
            value={textReview}
            onChange={(e) => setTextReview(e.target.value)}
          />
          <div>
            <StyledButton onClick={() => handleSubmit()}>Submit</StyledButton>
          </div>
        </StyledMovieInfoContainer>
      </MovieDetailsContainer>
    </>
  );
};

const StyledPoster = styled.img`
  height: 100%;
  width: 300px;

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const MovieDetailsContainer = styled.div`
  border: 1px solid #36454f;
  border-radius: 10px;
  width: 75%;
  height: fit-content;
  margin: 100px 0 0 50px;
  padding: 10px;
  color: #36454f;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media only screen and (max-width: 675px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const StyledMovieInfoContainer = styled.div`
  padding: 10px;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  outline: none;
  border-radius: 10px;
  width: 85%;
  padding: 5px;
`;

const StyledButton = styled.button`
  margin: 10px 0;
  cursor: pointer;

  outline: none;
`;

const StyledLike = styled(HeartIcon)`
  vertical-align: middle;
  margin-left: 10px;
  font-size: 25px;
  cursor:pointer;
  
  color: ${({ $likemovie }) => $likemovie && "red"};
  transition: color 0.3s ease-in-out;  
  }  
`;

export default MovieDetails;
