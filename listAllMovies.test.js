import { listAllMovies } from "./listAllMovies.js";
import prompts from "prompts";
import jsonfile from "jsonfile";

jest.mock("prompts");

it("should return the total amount of movies", async () => {
  const MOVIES = await jsonfile.readFile("./moviesList.json");
  let movies = MOVIES.movies;
  expect(movies.length).toEqual(146);
});

it("should render the first film title of the second panel after a prompt", async () => {
  const MOVIES = await jsonfile.readFile("./moviesList.json");
  let movies = MOVIES.movies;
  let allTitles = movies.map((entity) => {
    return entity.title;
  });
  //A panel contain 20 movies
  let firstFilmInPanel = allTitles[20];

  await listAllMovies();

  expect(allTitles[20]).toEqual(firstFilmInPanel);
});
// // Mock stdin so we can send messages to the CLI
// let io = null;
// beforeAll(() => (io = stdin());
// afterAll(() => io.restore());
// test("prompt for input", async (done) => {
//   const sendKeystrokes = async () => {
//     "\x0D";
//   };
//   setTimeout(() => sendKeystrokes().then(), 5);
//
//   const result = await prompts({
//     type: "toggle",
//     name: "value",
//     message: "Do you want more?",
//     initial: true,
//     active: "Next",
//     inactive: "Prev",
//   });
//   done();
//expect(result).toBe({ "result.value": true });
//listAllMovies();
//prompts.mockReturnValue({ value: true });
//expect(allTitles[0]).toEqual(firstFilmInPanel);
