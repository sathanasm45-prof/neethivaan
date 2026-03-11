import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", padding: "20px", background: "#f1f5f9" }}>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/complaint/new">File Complaint</Link></li>
        <li><Link to="/ai-chat">AI Assistant</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/lawyers">Lawyers</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;