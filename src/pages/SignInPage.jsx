import React, { useState } from "react";

const SignInPage = ({ authCreateAccountWithEmail, authSignInWithEmail, authSignInWithGoogle }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }
  //console.log(user);

  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleOnChange}
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        required
        onChange={handleOnChange}
      />
      <button 
        onClick={() => authSignInWithEmail(user.email, user.password)}>
        Sign in
      </button>
      <button
        onClick={() => authCreateAccountWithEmail(user.email, user.password)}>
        Create account
      </button>
      <button 
        onClick={()=>authSignInWithGoogle()}>
          Sign in with Google
        </button>
    </div>
  );
};

export default SignInPage;
