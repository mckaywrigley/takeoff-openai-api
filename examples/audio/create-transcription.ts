import { config } from "dotenv";
import fs from "fs";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("resources/mlk.mp3"),
    model: "whisper-1"
  });

  console.log(transcription);

  const outputFile = "outputs/transcription.txt";
  await fs.promises.writeFile(outputFile, transcription.text);
}

main();
