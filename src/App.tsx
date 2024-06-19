import React, { useState } from "react";
import Loading from "./Components/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {/* <h1>What is your ideal type?</h1> */}
      <div className="App">{loading ? <Loading></Loading> : <></>}</div>
    </>
  );
}

export default App;
