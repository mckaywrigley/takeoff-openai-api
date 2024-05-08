# Takeoff: OpenAI API

This module is a guide to the OpenAI API.

## Resources

- [Takeoff](https://JoinTakeoff.com)
- [OpenAI Docs](https://platform.openai.com/docs/overview)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)

## Prompts

We recommend using [Cursor](https://cursor.sh/) to write code.

Use the files in the `prompts` folder to help you in this module.

## Prerequisites

You will need an OpenAI API Key.

Get one [here](https://platform.openai.com/api-keys).

Copy the `.env.example` file to `.env`.

```bash
cp .env.example .env
```

In `.env`, fill in the API key.

```bash
OPENAI_API_KEY=your-openai-api-key
```

## Install Packages

```bash
npm i
```

## Structure

The example code is in the `examples` folder.

Your code is in the `me` folder.

## Run Code

Install `tsx` to run the examples.

```bash
npm i -g tsx
```

Example: Run the `audio-create-speech-example` and `audio-create-speech-me` files.

Copy the relative path of the file.

For the example code, run the following command:

```bash
tsx examples/audio/create-speech.ts
```

For your code, run the following command:

```bash
tsx me/audio/create-speech.ts
```
