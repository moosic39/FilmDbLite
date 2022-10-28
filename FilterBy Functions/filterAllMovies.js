import prompts from "prompts";
import { filterByYear } from "./filterByYear.js";
import { filterByGenre } from "./filterByGenre.js";

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
  return console.log(await choice.value());
}
