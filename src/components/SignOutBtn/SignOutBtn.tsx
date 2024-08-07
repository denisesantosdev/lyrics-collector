import { Link } from "react-router-dom";

import useAuth from "@hooks/useAuth";

import { logoutIcon } from "@styles/icons";

interface SignOutBtnProps {
  setMenuIsClosed: Function
}

const SignOutBtn: React.FC<SignOutBtnProps> = ({setMenuIsClosed}) => {
  const { authSignOut } = useAuth();

  return (
    <Link
      to={"/"}
      onClick={()=>{
        authSignOut()
        setMenuIsClosed((prev: boolean) => !prev)
        }}>
      <img
        src={logoutIcon}
        alt=""
      />
    </Link>
  );
};

export default SignOutBtn;
