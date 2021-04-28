import { useSelector } from "react-redux";

import "./App.css";
import Header from "./Layout/Header";

const App = () => {
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  console.log(users);
  console.log(questions);

  return (
    <div className="App">
      <Header />
      Would You Rather
    </div>
  );
};

export default App;
