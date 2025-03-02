const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");

require('dotenv').config(); // API key .env එකෙන් ගන්න

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// OpenAI API Config
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY // OpenAI API Key
}));

// AI Chatbot API endpoint
app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: userMessage,
      max_tokens: 100
    });

    res.json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error communicating with AI" });
  }
});

// Server එක start කරන්න
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
