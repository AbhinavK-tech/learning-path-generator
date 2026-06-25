require('dotenv').config();

const { GoogleGenAI } = require("@google/genai");

async function askGemini(prompt) {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  });

  const response =
    await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt
    });

  return response.text;
}

module.exports = { askGemini };
