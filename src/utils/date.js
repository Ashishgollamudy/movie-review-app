import { months } from "../constants/date";

export function getReleaseYear(data) {
  return data.split("-")[0];
}

export function getReleaseDate(date) {
  const [yearNumber, monthNumber, dateNumber] = date.split("-");

  return `${months[monthNumber]} ${dateNumber}, ${yearNumber}`;
}
