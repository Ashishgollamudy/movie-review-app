export function getVoteColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote < 8 && vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
}
