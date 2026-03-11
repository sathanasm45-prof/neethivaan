import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeCase(text) {

const prompt = `
Analyze this industrial legal case.

Return:
Category
Risk level
Short summary

Case:
${text}
`;

const response = await openai.chat.completions.create({
model: "gpt-4o-mini",
messages: [{ role: "user", content: prompt }]
});

return response.choices[0].message.content;
}