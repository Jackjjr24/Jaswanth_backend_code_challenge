import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdatePlayer({ selected, refresh }) {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    if (selected) setPlayer(selected);
  }, [selected]);

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put("http://localhost:8080/api/players/" + player.playerId, player)
      .then(() => {
        alert("Player Updated");
        refresh();
      });
  };

  if (!selected) return null;

  return (
    <div className="card shadow p-3 mb-3">
      <h5 className="section-title">Update Player</h5>

      <form onSubmit={handleSubmit}>
        <input name="playerName"
          value={player.playerName || ""}
          placeholder="Player Name"
          className="form-control mb-2"
          required
          onChange={handleChange} />

        <input name="jerseyNumber"
          value={player.jerseyNumber || ""}
          type="number"
          placeholder="Jersey Number"
          className="form-control mb-2"
          required
          onChange={handleChange} />

        <select name="role"
          value={player.role || "Batsman"}
          className="form-control mb-2"
          onChange={handleChange}>
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="Keeper">Keeper</option>
          <option value="AllRounder">All Rounder</option>
        </select>

        <input name="totalMatches"
          value={player.totalMatches || ""}
          type="number"
          placeholder="Total Matches"
          className="form-control mb-2"
          required
          onChange={handleChange} />

        <input name="teamName"
          value={player.teamName || ""}
          placeholder="Team Name"
          className="form-control mb-2"
          required
          onChange={handleChange} />

        <input name="country"
          value={player.country || ""}
          placeholder="Country"
          className="form-control mb-2"
          required
          onChange={handleChange} />

        <input name="description"
          value={player.description || ""}
          placeholder="Description"
          className="form-control mb-3"
          required
          onChange={handleChange} />

        <button className="btn btn-warning w-100">
          Update Player
        </button>
      </form>
    </div>
  );
}

export default UpdatePlayer;