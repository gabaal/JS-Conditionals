console.log("Console log to check it is working");

const age = prompt("What is your age?");
let movieRating = prompt("And the movie rating, 18, 15, 12, PG or U?");

if (age > 17) {
  console.log("You can watch any movie.");
} else if (age >= 17) {
  if (
    movieRating === "15" ||
    movieRating === "12" ||
    movieRating === "PG" ||
    movieRating === "U"
  ) {
    console.log("You can watch the movie.");
  } else console.log(`Sorry, you can't want the movie.`);
} else if (age >= 15) {
  if (
    movieRating === "15" ||
    movieRating === "12" ||
    movieRating === "PG" ||
    movieRating === "U"
  ) {
    console.log("You can watch the movie.");
  } else console.log(`Sorry, you can't want the movie.`);
} else if (age >= 12) {
  if (movieRating === "12" || movieRating === "PG" || movieRating === "U") {
    console.log("You can watch the movie.");
  }
} else if (age >= 8) {
  if (movieRating === "PG" || movieRating === "U") {
    console.log("You can watch the movie.");
  } else console.log(`Sorry, you can't want the movie.`);
} else if (age >= 4) {
  if (movieRating === "U") {
    console.log("You can watch the movie.");
  }
} else {
  console.log(`Sorry, you can't want the movie.`);
}
