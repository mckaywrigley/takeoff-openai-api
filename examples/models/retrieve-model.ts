import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const model = await openai.models.retrieve("gpt-4-turbo");

  console.log(model);
}

main();
