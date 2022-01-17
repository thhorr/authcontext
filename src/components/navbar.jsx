import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <div>
      <div>
        Navbar  :: Is the user logged in?
        {isAuth ? " True" : " False"}
      </div>
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        {!isAuth ? "Log In" : "Log out"}
      </button>
    </div>
  );
};
