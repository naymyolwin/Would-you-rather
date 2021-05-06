import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import Header from "./Layout/Header";
import { fetchData } from "./store/fetchInitialDataActions";

const App = () => {
  const authUser = useSelector((state) => state.authUser.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {authUser === "" ? <Login /> : <Main />}
    </div>
  );
};

export default App;
