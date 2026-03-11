import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function legalChat(question){

const response = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{role:"system",content:"You are an industrial legal advisor helping companies understand legal risks."},
{role:"user",content:question}
]

});

return response.choices[0].message.content;

}