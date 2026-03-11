import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeCase(text) {

  const prompt = `
  Analyze this legal complaint and give:
  1. Case category
  2. Risk level
  3. Short summary

  Complaint:
  ${text}
  `;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: prompt }
    ]
  });

  return response.choices[0].message.content;
}