import prompts from "prompts";
import chalk from "chalk";
import { filterByGenre } from "./filterByGenre.js";
import { filterByYear } from "./filterByYear.js";

jest.mock("prompts");

// Only one criterium
it("should return only two films", async () => {
  prompts.mockReturnValueOnce({ value: ["Horror"] });
  let horrorList = await filterByGenre();
  expect(horrorList.length).toEqual(2);
});

// Two criteria
it("should return height films", async () => {
  prompts.mockReturnValueOnce({ value: ["Comedy", "Crime"] });
  let list = await filterByGenre();
  expect(list.length).toEqual(8);
});

// Three criteria
it("should return The Wolf of Wall Street", async () => {
  prompts.mockReturnValueOnce({
    value: ["Biography", "Comedy", "Crime"],
  });
  let wolfOfWallStreet = await filterByGenre();
  let title = wolfOfWallStreet[0].title;
  expect(title).toBe("The Wolf of Wall Street");
});

// Error
it("should return an error", async () => {
  prompts.mockReturnValueOnce({ value: ["Music", "Animation"] });
  expect(await filterByGenre()).toBe(
    chalk.redBright.bold("There is no result for your research.")
  );
});
