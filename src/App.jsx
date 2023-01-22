import { useState } from "react";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <MainPage isLoggedIn={isLoggedIn} login={login} logout={logout} />
    </div>
  );
}

export default App;
