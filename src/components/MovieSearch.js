import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieSearch = ({ onSearch, showSearch }) => {
  return (
    <MovieSearchContainer>
      <Link to="/">
        <img
          src="/assets/movie-icon.png"
          style={{ marginRight: "10px" }}
          height="30px"
          alt="Icon"
        />
      </Link>
      {showSearch && (
        <StyledInput
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => onSearch(e.target.value)}
        />
      )}
      <StyledPlaceholder />
    </MovieSearchContainer>
  );
};

const StyledInput = styled.input`
  width: 300px;
  border: 1px solid #36454f;
  border-radius: 15px;
  padding: 0.5rem 1.5rem;

  &:focus {
    outline: none;
  }
`;

const MovieSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  padding: 10px;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const StyledPlaceholder = styled.div`
  opacity: 0;
`;
export default MovieSearch;
