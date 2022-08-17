import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./MovieListItem";
import MovieSearch from "./MovieSearch";
import { MOVIE_API } from "../constants/url";

function MovieContainer() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("koi");

  const onSearchCallback = useCallback(() => {
    setLoading(true);
    fetch(`${MOVIE_API}${searchTerm}`)
      .then((response) => response.json())
      .then((movies) => {
        setMoviesList(movies.results);
        setLoading(false);
      });
  }, [searchTerm]);

  useEffect(() => {
    let cancelled = false;
    if (!cancelled) {
      onSearchCallback();
    }

    return () => {
      cancelled = true;
    };
  }, [onSearchCallback]);

  function onSearchChange(value) {
    if (value && value.trim().length > 0) {
      setSearchTerm(value);
    }
  }

  return (
    <>
      <MovieSearch onSearch={onSearchChange} showSearchProp />
      <StyledMovieListContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          moviesList.map((movie) => <Movie key={movie.id} movie={movie} />)
        )}
      </StyledMovieListContainer>
    </>
  );
}

const StyledMovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
`;

export default MovieContainer;
