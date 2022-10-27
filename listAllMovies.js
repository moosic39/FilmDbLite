import jsonfile from "jsonfile";
import prompts from "prompts";
import chalk from "chalk";

const filePath = "./moviesList.json";

export async function listAllMovies() {
  const MOVIES = await jsonfile.readFile(filePath);

  let movies = MOVIES.movies;

  let allTitles = movies.map((entity) => {
    return entity.title;
  });

  let sliceId = 0;

  console.log(
    chalk.blueBright.bold(`There is ${movies.length} movies in the list`)
  );

  while (sliceId <= movies.length) {
    console.log(allTitles.slice(sliceId, sliceId + 20));

    let previousNextChoice = await prompts({
      type: "toggle",
      name: "value",
      message: "Do you want more?",
      initial: true,
      active: "Next",
      inactive: "Prev",
    });

    if (previousNextChoice.value === false && sliceId === 0) {
      console.log(
        chalk.redBright.bold(
          "You can't go previously, you're at the beginning of the list"
        )
      );
    } else if (previousNextChoice.value === true) {
      sliceId += 20;
    } else if (previousNextChoice.value === false) {
      sliceId -= 20;
    }
  }
}
