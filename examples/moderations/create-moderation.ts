import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const moderation = await openai.moderations.create({ input: "I want to kill them." });
  console.log(moderation);

  const result = moderation.results[0];
  console.log(result);
}

main();
