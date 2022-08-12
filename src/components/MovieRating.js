import styled from "styled-components";
import { getVoteColor } from "../utils/movie";

const MovieRating = ({ rating, children }) => (
  <>
    {children ? (
      <p>
        {children} :
        <StyledVote voteColor={getVoteColor(rating)}> {rating}</StyledVote>
      </p>
    ) : (
      <StyledVoteBackground voteColor={getVoteColor(rating)}>
        {rating}
      </StyledVoteBackground>
    )}
  </>
);

const StyledVoteBackground = styled.p`
  background-color: #36454f;
  font-weight: bolder;
  border-radius: 5px;
  padding: 5px;

  color: ${({ voteColor }) => voteColor};
`;

const StyledVote = styled.span`
  color: ${({ voteColor }) => voteColor};
`;

export default MovieRating;
