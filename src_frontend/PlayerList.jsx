import React, { useEffect, useState } from "react";
import axios from "axios";

function PlayerList({ refresh, onEdit }) {
  const [players, setPlayers] = useState([]);

  const loadPlayers = () => {
    axios.get("http://localhost:8080/api/players")
      .then(res => setPlayers(res.data));
  };

  useEffect(() => {
    loadPlayers();
  }, [refresh]);

  const handleDelete = (id) => {
    axios.delete("http://localhost:8080/api/players/" + id)
      .then(() => loadPlayers());
  };

  return (
    <div className="card shadow p-3 mt-4">
      <h5 className="section-title text-center">Players List</h5>

      <table className="table table-hover table-bordered mt-3">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Jersey</th>
            <th>Role</th>
            <th>Team</th>
            <th>Country</th>
            <th>Matches</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {players.map(p => (
            <tr key={p.playerId}>
              <td>{p.playerId}</td>
              <td>{p.playerName}</td>
              <td>{p.jerseyNumber}</td>
              <td>{p.role}</td>
              <td>{p.teamName}</td>
              <td>{p.country}</td>
              <td>{p.totalMatches}</td>

              <td>
                <button
                  className="btn btn-outline-warning btn-sm me-2"
                  onClick={() => onEdit(p)}>
                  Edit
                </button>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(p.playerId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;