import { Link } from "react-router-dom"

export default function Home(){

return(

<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

<h1 className="text-5xl font-bold text-blue-600 mb-6">
Neethivaan
</h1>

<p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
AI Powered Legal Assistance Platform that helps citizens file complaints,
track case progress, and receive legal guidance.
</p>

<div>

<Link to="/login">
<button className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-700">
Login
</button>
</Link>

<Link to="/register">
<button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
Register
</button>
</Link>

</div>

</div>

)

}