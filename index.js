import chalk from "chalk";
import prompts from "prompts";
import figlet from "figlet";
import { listAllMovies } from "./listAllMovies.js";
import { filterBy } from "./FilterByFunctions/filterAllMovies.js";
import { printName } from "./printName.js";

// moviesList.json from erik-sytnyk's git repo : movies-list (on https://github.com/erik-sytnyk/movies-list/blob/master/db.json)

figlet("The MoviesDB", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.blueBright(data));
});

async function app() {
  console.log(chalk.blueBright.bold(await printName()));

  let continueQuestion = { choice: true };
  while (continueQuestion.choice === true) {
    let selectTopic = await prompts({
      type: "select",
      name: "value",
      message: "Choose a command",
      choices: [
        {
          title: "List all movies",
          value: listAllMovies,
        },
        {
          title: "Filter all movies",
          value: filterBy,
        },
        {
          title: "Exit",
          value: process.exit,
        },
      ],
      initial: 0,
    });
    let sure = await prompts({
      type: "toggle",
      name: "value",
      message: "Can you confirm?",
      initial: true,
      active: "yes",
      inactive: "no",
    });
    if (sure.value === true) {
      console.log("Let's go to the selected feature");
      await selectTopic.value();
    } else {
      continueQuestion = await prompts({
        type: "confirm",
        name: "choice",
        message: "Do you want to continue ?",
        initial: true,
      });
    }
  }
}

setTimeout(app, 500);
