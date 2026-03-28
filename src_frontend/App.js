import React, { useState } from "react";
import AddPlayer from "./AddPlayer";
import UpdatePlayer from "./UpdatePlayer";
import DeleteByJersey from "./DeleteByJersey";
import PlayerList from "./PlayerList";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState(null);

  const reload = () => setRefresh(!refresh);

  return (
    <div className="container">
      <h1 className="text-center my-4">Cricket Team Management</h1>

      <div className="row">
        <div className="col-md-4">
          <AddPlayer refresh={reload} />
          <DeleteByJersey refresh={reload} />
        </div>

        <div className="col-md-4">
          <UpdatePlayer selected={selected} refresh={reload} />
        </div>

        <div className="col-md-12">
          <PlayerList refresh={refresh} onEdit={setSelected} />
        </div>
      </div>
    </div>
  );
}

export default App;