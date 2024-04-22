import React from "react";
import useAuth from "../../customHooks/useAuth";

const SignOutBtn = () => {
  const { authSignOut } = useAuth();

  return <button onClick={authSignOut}>Sign Out</button>;
};

export default SignOutBtn;
