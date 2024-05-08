import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "what is your favorite food?" },
      { role: "assistant", content: "I like pizza" },
      { role: "user", content: "What is your second favorite food?" }
    ],
    model: "gpt-3.5-turbo"
  });

  console.log(completion.choices[0].message);
}

main();
