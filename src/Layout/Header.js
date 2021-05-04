import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { authUserActions } from "../store/authUser-slice";

const Header = () => {
  const login = useSelector((state) => state.authUser.authUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authUserActions.Logout());
  };
  return (
    <div className="Header">
      <div>
        <div>Would</div>
        <div>You</div>
        <div>Rather...?</div>
      </div>
      <div>Leader Board</div>
      <div>
        {login === "" ? <div></div> : <div onClick={logoutHandler}>Logout</div>}
      </div>
    </div>
  );
};

export default Header;
