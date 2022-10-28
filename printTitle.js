import figlet from "figlet";
import chalk from "chalk";

export function printTitle() {
  figlet("The MoviesDB", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    return data;
  });
}

//console.log(chalk.blueBright(printTitle()));
