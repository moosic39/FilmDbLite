import prompts from "prompts";
import { printName } from "./printName.js";

jest.mock("prompts");

it("should right the prompt firstName", async () => {
  prompts.mockReturnValue({ firstName: "Bruce" });

  expect(await printName()).toBe("Welcome Bruce !");
});
