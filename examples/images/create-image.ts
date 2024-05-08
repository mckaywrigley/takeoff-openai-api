import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const response = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });
  console.log(response);

  const image = response.data[0];
  console.log(image);
}

main();
