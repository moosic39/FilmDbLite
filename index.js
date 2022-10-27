import chalk from "chalk";
import prompts from "prompts";
import figlet from "figlet";
import { listAllMovies } from "./listAllMovies.js";
import { filterBy } from "./filterAllMovies.js";

//import DB from erik-sytnyk's git repo : movies-list (on https://github.com/erik-sytnyk/movies-list/blob/master/db.json)

figlet("The MoviesDB", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.blueBright(data));
});

async function app() {
  const promptResult = await prompts({
    type: "text",
    name: "firstName",
    message: "What's your name?",
  });
  // let confirmEnding = true;
  //   while (confirmEnding === false){

  console.log(chalk.blueBright.bold(`Welcome ${promptResult.firstName} !`));

  let continueQuestion = await prompts({
    type: "confirm",
    name: "choice",
    message: "Do you want to continue ?",
    initial: true,
  });
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
          title: "Access to another feature",
          value: "batmanRocks",
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
      console.log("Let's go to the selected fct");
      await selectTopic.value();
    } else {
      console.log(chalk.yellow.bold(continueQuestion.choice));
      continueQuestion = await prompts({
        type: "confirm",
        name: "choice",
        message: "Do you want to continue ?",
        initial: true,
      });
    }
  }
}

setTimeout(app, 300);
