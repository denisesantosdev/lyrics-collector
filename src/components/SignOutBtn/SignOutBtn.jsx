import React from "react";
import useAuth from "../../customHooks/useAuth";
import { logoutIcon } from "../../theme/icons";
import { Link } from "react-router-dom";

const SignOutBtn = () => {
  const { authSignOut } = useAuth();

  return (
    <Link
      to={"/"}
      onClick={authSignOut}>
      <img
        src={logoutIcon}
        alt=""
      />
    </Link>
  );
};

export default SignOutBtn;
