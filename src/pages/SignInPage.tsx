import styled from "styled-components";
import useAuth from "@hooks/useAuth";

import Input from "@components/Input/Input";
import Btn from "@components/Btn/Btn";

import { Link } from "react-router-dom";

import { returnArrow } from "@styles/icons";
import { doodles } from "@styles/images";

const StyledWrapper = styled.section`
  position: absolute;
  inset: 0;
  background-color: ${(props) => props.theme.colors.primary};
  display: grid;
  
  @media (min-width: 1024px) {
     grid-template-columns: 1fr 1fr; 
     gap: 2rem;
  }
`;

const StyledBg = styled.div`
  width: 100%;
  background: 
        linear-gradient(to top, ${(props) =>
          props.theme.colors.primary}, transparent 90%), 
        url(${doodles});
  background-size: cover;
  background-repeat: no-repeat;
  order: -1;

  @media (min-width: 1024px) {
     order: 0;
     background: 
        linear-gradient(to right, ${(props) =>
          props.theme.colors.primary}, transparent 90%), 
        url(${doodles});
        background-size: cover;
        background-repeat: no-repeat;
  }
`;

const StyledSignInForm = styled.div`
  display: grid; 
  gap: 2rem;
  padding: 1rem;
  margin: auto;
  max-width: 500px;

  > header {
    place-self: start;
  }

  > h1 {
    text-align: center;
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SignInPage = () => {
  const {
    user,
    setUser,
    authCreateAccountWithEmail,
    authSignInWithEmail,
    authSignInWithGoogle,
  } = useAuth();

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <StyledWrapper>
      <StyledSignInForm>
        <header>
          <Link to={"/"}>
            <img
              src={returnArrow}
              alt=""
            />
          </Link>
        </header>
        <h1>Sign in and save your favorite lyrics!</h1>
        <Input
          type="text"
          name="email"
          id="email"
          labelText="Email"
          handleOnChange={handleOnChange}
          required={true}
        />
        <Input
          type="password"
          name="password"
          id="password"
          labelText="Password"
          handleOnChange={handleOnChange}
          required={true}
        />
        <StyledBtnWrapper>
          <Btn
            btnText="Sign In"
            isPrimary={true}
            handleOnClick={() => authSignInWithEmail(user.email, user.password)}
          />
          <Btn
            btnText="Create account"
            handleOnClick={() =>
              authCreateAccountWithEmail(user.email, user.password)
            }
          />
          <Btn
            btnText="Sign in with Google"
            handleOnClick={() => authSignInWithGoogle()}
          />
        </StyledBtnWrapper>
      </StyledSignInForm>

      <StyledBg></StyledBg>
    </StyledWrapper>
  );
};

export default SignInPage;
