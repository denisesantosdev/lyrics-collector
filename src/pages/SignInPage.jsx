import React from "react";
import useAuth from "../customHooks/useAuth";
import Input from "../components/Input/Input";
import Btn from "../components/Btn/Btn";
import styled from "styled-components";

const StyledWrapper = styled.section`
  position: absolute;
  inset: 0;
  background-color: ${props=>props.theme.colors.primary};
  display: grid;
  place-content: center;
  /* grid-template-columns: 1fr 1fr; */
`

const StyledSignInForm = styled.div`
   display: grid; 
  gap: 2rem;
  padding: 1rem;

  > button {
    justify-self: start
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

  function handleOnChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }
  //console.log(user);

  return (
    <StyledWrapper>
      <div>
        <StyledSignInForm>
        <button>Back</button>
        <h1>Sign in and save your favorite lyrics!</h1>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            handleOnChange={handleOnChange}
            required={true}
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
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
              handleOnClick={() => authCreateAccountWithEmail(user.email, user.password)}
            />
            <Btn
              btnText="Sign in with Google"
              handleOnClick={() => authSignInWithGoogle()}
            />
          </StyledBtnWrapper>
        </StyledSignInForm>
      </div>

     {/*  <div>Image goes here</div> */}
    </StyledWrapper>
  );
};

export default SignInPage;
