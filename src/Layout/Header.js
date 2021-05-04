import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { loginUserActions } from "../store/login-slice";

const Header = () => {
  const login = useSelector((state) => state.loginUser.loginUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginUserActions.userLoggedOut());
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
        {login === "" ? (
          <div>Login</div>
        ) : (
          <div onClick={logoutHandler}>Logout</div>
        )}
      </div>
    </div>
  );
};

export default Header;
