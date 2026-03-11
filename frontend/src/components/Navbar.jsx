import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#1e293b", color: "white" }}>
      <h2>Neethivaan LegalTech</h2>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/ai-chat">AI Assistant</Link> |{" "}
      <Link to="/lawyers">Lawyers</Link>
    </nav>
  );
}

export default Navbar;