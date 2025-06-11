import React, { useState } from "react";
import Button, { Item } from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loading from "./Loading";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="vh-100 vw-100 d-flex flex-column justify-content-center gap-5">
          <h1 className="text-center text-white">Fruits Receipt Machine</h1>
          <div className="d-flex gap-5 justify-content-center">
            {Object.values(Item).map((item) => (
              <Button key={item} type={item} setLoading={setLoading} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
