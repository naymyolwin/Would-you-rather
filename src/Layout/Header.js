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
      <Link className={classes.Link} to="/">
        <div className={classes.Logo}>HOME</div>
      </Link>
      <Link to="/leaderboard" className={classes.Link}>
        <div className={classes.Leaderboard}>
          <div>Leader Board</div>
        </div>
      </Link>
      {login && (
        <div className={classes.NameContainer}>
          <img
            className={classes.image}
            src={users[login].avatarURL}
            alt="User Avatar"
          />
          <div className={classes.Name}>{users[login].name}</div>
        </div>
      )}
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
