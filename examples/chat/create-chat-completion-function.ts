import { config } from "dotenv";
import OpenAI from "openai";
import { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const messages: ChatCompletionMessageParam[] = [{ role: "user", content: "What's the weather like in Boston today?" }];

  const tools: ChatCompletionTool[] = [
    {
      type: "function",
      function: {
        name: "get_current_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g., San Francisco, CA"
            },
            unit: { type: "string", enum: ["celsius", "fahrenheit"] }
          },
          required: ["location"]
        }
      }
    }
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages,
    tools,
    tool_choice: "auto"
  });
  console.log(response);

  const message = response.choices[0].message;
  console.log(message);

  const tool_calls = message.tool_calls;
  console.log(tool_calls);
}

main();
