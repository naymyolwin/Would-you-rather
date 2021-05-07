import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddQuestion from "./Components/AddQuestion/AddQuestion";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";

import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import QuestionDetail from "./Components/QuestionDetail/QuestionDetail";
import Header from "./Layout/Header";
import { fetchData } from "./store/fetchInitialDataActions";

const App = () => {
  const authUser = useSelector((state) => state.authUser.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            {authUser === "" ? <Login /> : <Main />}
          </Route>
          <Route path="questions/:question_id">
            <QuestionDetail />
          </Route>
          <Route path="/add">
            <AddQuestion />
          </Route>
          <Route path="/leaderboard">
            <LeaderBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
