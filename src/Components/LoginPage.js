import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let e = "";
  const handleLogin = async () => {
    if (userName === "admin" && password === "1234") {
      navigate("/");
    } else {
      e = "Invalid username or password";
      alert(e);
    }
    navigate("/profile");
  };

  return (
    <Container>
      <SignUP>
        <p>Create new Account</p>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        ></input>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="UserName"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>

        <button>Sign Up</button>
      </SignUP>
      <LoginIn>
        <p>Welcome Back</p>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="UserName"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>

        <button onClick={handleLogin}>Log In</button>
      </LoginIn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  // min-height: 70vh;
  // height: auto;
  height: 100%;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUP = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;

  button {
    padding: 15px;
    border-radius: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  input {
    padding: 5px;
  }
`;
const LoginIn = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;

  button {
    padding: 15px;
    border-radius: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  input {
    padding: 5px;
  }
`;

export default LoginPage;
