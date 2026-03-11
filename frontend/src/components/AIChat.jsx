import {useState} from "react";

export default function AIChat(){

const [question,setQuestion]=useState("");
const [answer,setAnswer]=useState("");

const askAI = async ()=>{

const res = await fetch("http://localhost:5000/api/ai/chat",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({question})
});

const data = await res.json();

setAnswer(data.answer);

};

return(

<div>

<input
className="border p-2"
placeholder="Ask legal question"
onChange={e=>setQuestion(e.target.value)}
/>

<button onClick={askAI}>
Ask
</button>

<p>{answer}</p>

</div>

)

}