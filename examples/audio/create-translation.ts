import { config } from "dotenv";
import fs from "fs";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const translation = await openai.audio.translations.create({
    file: fs.createReadStream("resources/spanish.mp3"),
    model: "whisper-1",
    prompt: "Translate from spanish to english",
    temperature: 0.9
  });

  console.log(translation);

  const outputFile = "outputs/translation.txt";
  await fs.promises.writeFile(outputFile, translation.text);
}

main();
