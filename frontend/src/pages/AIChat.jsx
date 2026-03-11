<div className="p-10 max-w-xl mx-auto">

<h1 className="text-2xl font-bold mb-4">
AI Legal Assistant
</h1>

<input
className="border p-3 w-full rounded mb-4"
placeholder="Ask a legal question..."
onChange={(e)=>setQuestion(e.target.value)}
/>

<button
className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
onClick={askAI}
>
Ask AI
</button>

<div className="mt-6 p-4 bg-gray-100 rounded">
{answer}
</div>

</div>