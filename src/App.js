import { useSelector } from "react-redux";

import "./App.css";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Header from "./Layout/Header";

const App = () => {
  const authUser = useSelector((state) => state.authUser.authUser);

  return (
    <div className="App">
      <Header />
      {authUser === "" ? <Login /> : <Main />}
    </div>
  );
};

export default App;
