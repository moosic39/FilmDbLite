import jsonfile from "jsonfile";
import prompts from "prompts";
import chalk from "chalk";

const filePath = "./moviesList.json";

export async function filterByYear() {
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
    return chalk.redBright.bold("There is no result for your research.");
  } else {
    return listOfDesiredMovies;
  }
}
