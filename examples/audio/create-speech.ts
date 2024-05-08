import { config } from "dotenv";
import fs from "fs";
import OpenAI from "openai";
import path from "path";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const speechFile = path.resolve("outputs/speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "Today is a wonderful day to build something people love!"
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

main();
