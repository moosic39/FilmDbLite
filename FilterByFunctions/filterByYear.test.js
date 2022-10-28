import prompts from "prompts";
import chalk from "chalk";
import { filterByYear } from "./filterByYear.js";

const filePath = "./moviesList.json";

jest.mock("prompts");

it("should render all film in 1988", async () => {
  prompts.mockReturnValue({ value: "1988" });
  expect(await filterByYear()).toMatchObject([
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      runtime: "92",
      genres: ["Comedy", "Fantasy"],
      director: "Tim Burton",
      actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
      plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
    },
  ]);
});

it("should render all film in 1990 but no result", async () => {
  prompts.mockReturnValue({ value: "1990" });
  expect(await filterByYear()).toBe(
    chalk.redBright.bold("There is no result for your research.")
  );
});

it("should return an error when string input", async () => {
  prompts.mockReturnValue({ value: "qsdf" });
  expect(await filterByYear()).toBe(
    chalk.redBright.bold("There is no result for your research.")
  );
});
