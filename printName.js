import prompts from "prompts";

export async function printName() {
  let promptResult = await prompts({
    type: "text",
    name: "firstName",
    message: "What's your name?",
  });
  return "Welcome " + promptResult.firstName + " !";
}
