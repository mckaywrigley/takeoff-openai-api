import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: "The quick brown fox jumped over the lazy dog"
  });

  console.log(response);

  const embeddings = response.data[0].embedding;
  console.log(embeddings);
}

main();
