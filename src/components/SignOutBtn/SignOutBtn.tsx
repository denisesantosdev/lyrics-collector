import { Link } from "react-router-dom";

import useAuth from "@hooks/useAuth";

import { logoutIcon } from "@styles/icons";

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
