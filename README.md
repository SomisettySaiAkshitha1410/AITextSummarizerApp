

# AI Text Summarizer

A web application that uses state-of-the-art AI models to generate concise summaries of long text. Users can input any lengthy text and receive a clear, shortened version powered by Hugging Face’s BART model.

***

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Environment Variables](#environment-variables)


***

## Features

- AI-powered text summarization using `facebook/bart-large-cnn` model.
- Supports large input texts (between 200 and 100,000 characters).
- Real-time summary display with loading animation.
- Sample text insertion for quick demo.
- Lightweight backend with Node.js and Express.
- Secure API key handling with environment variables.

***

## Demo

Try it live at: [AI Text Summarizer](https://aitextsummarizerapp.onrender.com/)

***

## Usage

1. Paste or type your text in the "Text to Summarize" box.
2. Enter at least 200 characters to enable the "Summarize" button.
3. Click the "Summarize" button.
4. The summarized text will appear below after processing.

You can also use the demo button to auto-fill sample text.

***

## How It Works

- The frontend captures text input, verifies length, and disables/enables the submit button accordingly.
- Upon submission, it sends a POST request to the Express server at `/summarize`.
- The server calls the Hugging Face API with the text and retrieves a summary using the `facebook/bart-large-cnn` model.
- The summarized text is sent back and displayed to the user.

***

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/aitextsummarizer.git
cd aitextsummarizer
npm install
```

Create a `.env` file and add your Hugging Face access token:

```env
ACCESS_TOKEN=your_huggingface_access_token_here
```

Run the server:

```bash
node app.js
```

Open your browser at `http://localhost:3000`

***

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES6+)
- Axios for API requests
- HTML/CSS/Vanilla JS frontend
- Hugging Face Transformers API

***

## Environment Variables

- `ACCESS_TOKEN`: Your Hugging Face API Bearer token for authorized API access.

***


