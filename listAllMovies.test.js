// import { listAllMovies } from "./listAllMovies.js";
import prompts from "prompts";
import jsonfile from "jsonfile";

jest.mock("prompts");

it("should return the total amount of movies", async () => {
  const MOVIES = await jsonfile.readFile("./moviesList.json");
  let movies = MOVIES.movies;
  expect(movies.length).toEqual(146);
});

// it('should render the first film title of the second panel', () => {
//   const MOVIES = await jsonfile.readFile('./moviesList.json')
//   let firstFilmInPanel = MOVIES.movies[20]
//   prompts.mockReturnValue({ value: true })
//
// })
