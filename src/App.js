import { useSelector } from "react-redux";

import "./App.css";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Header from "./Layout/Header";

const App = () => {
  const loginUser = useSelector((state) => state.loginUser.loginUser);

  return (
    <div className="App">
      <Header />
      {loginUser === "" ? <Login /> : <Main />}
    </div>
  );
};

export default App;
