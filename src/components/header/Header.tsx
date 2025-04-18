import "./Header.scss";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link;
  };
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink
          to={"/"}
          className={getActiveClass}
        >
          Home
        </NavLink>
        <NavLink to={"/todo"} className={getActiveClass}>
          ToDo
        </NavLink>
        {/* <a href="/" className={`${classes.link} ${classes.active}`}>Home</a>
            <a href="/todo" className={`${classes.link} ${classes.active}`}>ToDo</a> */}
      </div>
    </header>
  );
};
