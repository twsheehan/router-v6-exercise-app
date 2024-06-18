import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";
import RootRoutes from "./RootRoutes";

function App() {
  const userId = [1, 2, 3, 4, 5];

  return (
    <Router>
      <div className="App">
        <BackButton />
        <ForwardButton />

        <GoHomeButton />

        <Link to="/about">About</Link>
        <br />

        <h1>Navbar</h1>
        {
          userId.map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}

        <RootRoutes />
      </div>
    </Router>
  );
}
export default App;
