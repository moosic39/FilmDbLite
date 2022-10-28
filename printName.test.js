import prompts from "prompts";
import { printName } from "./printName.js";

jest.mock("prompts");

it("should right the prompt firstName Bruce", async () => {
  prompts.mockReturnValueOnce({ firstName: "Bruce" });

  expect(await printName()).toBe("Welcome Bruce !");
});

it("should right the prompt firstName dsgrzety&é123", async () => {
  prompts.mockReturnValueOnce({ firstName: "dsgrzety&é123" });

  expect(await printName()).toBe("Welcome dsgrzety&é123 !");
});
