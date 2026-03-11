import { useState } from "react";
import API from "../services/api";

function FileComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitComplaint = async () => {
    await API.post("/complaints", { title, description });

    alert("Complaint submitted");
  };

  return (
    <div>
      <h2>File Complaint</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={submitComplaint}>Submit</button>
    </div>
  );
}

export default FileComplaint;