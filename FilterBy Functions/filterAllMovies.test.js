import prompts from "prompts";
import { filterByYear } from "./filterByYear.js";
import { filterBy } from "./filterAllMovies.js";
import { filterByGenre } from "./filterByGenre.js";

jest.mock("prompts");
jest.mock("./filterByYear.js");
jest.mock("./filterByGenre.js");

it("should call filterByGenre", async () => {
  prompts.mockReturnValue({ value: filterByGenre });
  await filterBy();

  expect(filterByGenre).toHaveBeenCalled();
});

it("should call filterByYear", async () => {
  prompts.mockReturnValue({ value: filterByYear });
  await filterBy();

  expect(filterByYear).toHaveBeenCalled();
});
