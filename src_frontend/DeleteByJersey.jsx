import React, { useState } from "react";
import axios from "axios";

function DeleteByJersey({ refresh }) {
  const [jersey, setJersey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.delete("http://localhost:8080/api/players/jersey/" + jersey)
      .then(() => {
        alert("Deleted by jersey");
        setJersey("");
        refresh();
      })
      .catch(() => alert("Jersey not found"));
  };

  return (
    <div className="card shadow p-3 mb-3">
      <h5 className="section-title">Delete by Jersey</h5>

      <form onSubmit={handleSubmit}>
        <input type="number"
          value={jersey}
          placeholder="Jersey Number"
          className="form-control mb-3"
          onChange={(e) => setJersey(e.target.value)} />

        <button className="btn btn-danger w-100">
          Delete Player
        </button>
      </form>
    </div>
  );
}

export default DeleteByJersey;