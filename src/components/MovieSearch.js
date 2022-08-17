import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const MovieSearch = ({ onSearch, showSearchProp }) => {
  const [showSearch, setshowSearch] = useState(false);

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
      {showSearchProp && (
        <StyledInput
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => onSearch(e.target.value)}
          showsearch={showSearch ? 1 : 0}
        />
      )}
      {showSearchProp && (
        <StyledSearchButton
          showsearch={showSearch ? 1 : 0}
          onClick={() => setshowSearch(true)}
        />
      )}
      <StyledCloseSearch
        showsearch={showSearch ? 1 : 0}
        onClick={() => setshowSearch(false)}
      />
      <StyledPlaceholder />
    </MovieSearchContainer>
  );
};

const StyledInput = styled.input`
  width: 80%;
  border: 1px solid #36454f;
  border-radius: 15px;
  padding: 0.5rem 1.5rem;
  &:focus {
    outline: none;
  }

  ${({ showsearch }) => {
    return !showsearch && window.innerWidth < 400 && `display: none;`;
  }}
`;

const StyledSearchButton = styled(FaSearch)`
  color: #fff;
  margin: 0 20px;
  cursor: pointer;
  @media only screen and (min-width: 400px) {
    margin: 0 30px;
  }
  ${({ showsearch }) => {
    return (showsearch || window.innerWidth > 400) && `display: none;`;
  }}
`;

const StyledCloseSearch = styled(AiOutlineClose)`
  color: #fff;
  margin: 0 20px;
  cursor: pointer;
  font-size: 25px;
  ${({ showsearch }) => {
    return !showsearch && `display: none;`;
  }};
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
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

export default MovieSearch;
