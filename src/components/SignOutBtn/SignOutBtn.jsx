import React from "react";
import useAuth from "../../customHooks/useAuth";
import {logoutIcon} from '../../theme/icons'

const SignOutBtn = () => {
  const { authSignOut } = useAuth();

  return <button onClick={authSignOut}>
    <img src={logoutIcon} alt="" />
  </button>;
};

export default SignOutBtn;
