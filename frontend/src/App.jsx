import { BrowserRouter, Routes, Route } from "react-router-dom"

function Home(){
  return <h1 style={{textAlign:"center"}}>Neethivaan Home</h1>
}

function Dashboard(){
  return <h1 style={{textAlign:"center"}}>Dashboard</h1>
}

function AIChat(){
  return <h1 style={{textAlign:"center"}}>AI Legal Assistant</h1>
}

export default function App(){
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/ai" element={<AIChat/>}/>

      </Routes>
    </BrowserRouter>
  )
}