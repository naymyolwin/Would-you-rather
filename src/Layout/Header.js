import { useSelector, useDispatch } from "react-redux";
import { authUserActions } from "../store/authUser-slice";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const login = useSelector((state) => state.authUser.authUser);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authUserActions.Logout());
  };
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>LOGO</div>
      <div className={classes.Leaderboard}>
        {login && <div>Leader Board</div>}
      </div>
      {login && <div className={classes.Name}>{users[login].name}</div>}
      <Link className={classes.Link} to="/">
        {login && (
          <div className={classes.Logout} onClick={logoutHandler}>
            Logout
          </div>
        )}
      </Link>
    </div>
  );
};

export default Header;
