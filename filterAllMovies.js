import jsonfile from "jsonfile";
import prompts from "prompts";
import chalk from "chalk";

const filePath = "./moviesList.json";

async function filterByYear() {
  const MOVIES = await jsonfile.readFile(filePath);
  const movies = MOVIES.movies;
  let desiredYear = await prompts({
    type: "text",
    name: "value",
    message: `What's your desired year?`,
  });
  console.log(desiredYear.value);
  let listOfDesiredMovies = movies.filter(
    ({ year }) => year === desiredYear.value
  );
  if (listOfDesiredMovies.length === 0) {
    console.log(chalk.redBright.bold("There is no result for your research."));
  } else {
    console.log(listOfDesiredMovies);
  }
}

async function filterByGenre() {
  const MOVIES = await jsonfile.readFile(filePath);
  const movies = MOVIES.movies;
  let desiredGenres = await prompts({
    type: "multiselect",
    name: "value",
    message: "Pick genre (max 3)",
    choices: [
      { title: "Comedy", value: "Comedy" },
      { title: "Fantasy", value: "Fantasy" },
      { title: "Crime", value: "Crime" },
      { title: "Drama", value: "Drama" },
      { title: "Music", value: "Music" },
      { title: "Adventure", value: "Adventure" },
      { title: "History", value: "History" },
      { title: "Thriller", value: "Thriller" },
      { title: "Animation", value: "Animation" },
      { title: "Family", value: "Family" },
      { title: "Mystery", value: "Mystery" },
      { title: "Biography", value: "Biography" },
      { title: "Action", value: "Action" },
      { title: "Film-Noir", value: "Film-Noir" },
      { title: "Romance", value: "Romance" },
      { title: "Sci-Fi", value: "Sci-Fi" },
      { title: "War", value: "War" },
      { title: "Western", value: "Western" },
      { title: "Horror", value: "Horror" },
      { title: "Musical", value: "Musical" },
      { title: "Sport", value: "Sport" },
    ],
    max: 3,
    hint: "- Space to select. Return to submit",
  });
  console.log(desiredGenres.value);
  let listOfDesiredMovies = movies.filter(({ genres }) =>
    desiredGenres.value.every((desiredGenre) => genres.includes(desiredGenre))
  );
  if (listOfDesiredMovies.length === 0) {
    console.log(chalk.redBright.bold("There is no result for your research."));
  } else {
    console.log(listOfDesiredMovies);
  }
}

export async function filterBy() {
  let choice = await prompts({
    type: "select",
    name: "value",
    message: "Filter by",
    choices: [
      { title: "Year", value: filterByYear },
      { title: "Genre", value: filterByGenre },
    ],
    initial: 0,
  });
  return choice.value();
}
