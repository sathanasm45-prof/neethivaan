import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Neethivaan AI Legal Assistant</h2>;
}

function Register() {
  return <h2>Register Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Neethivaan</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;