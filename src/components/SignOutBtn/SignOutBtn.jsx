import React from "react";
import useAuth from "../../customHooks/useAuth";
import { logoutIcon } from "../../theme/icons";
import { Link } from "react-router-dom";

const SignOutBtn = ({setMenuIsClosed}) => {
  const { authSignOut } = useAuth();

  return (
    <Link
      to={"/"}
      onClick={()=>{
        authSignOut()
        setMenuIsClosed((prev) => !prev)
        }}>
      <img
        src={logoutIcon}
        alt=""
      />
    </Link>
  );
};

export default SignOutBtn;
