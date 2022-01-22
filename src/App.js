import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Topics from "./Components/Topics";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Components/Profile";
import Content from "./Components/Content";
import LoginPage from "./Components/LoginPage";

import AdminOper from "./Components/AdminOper";
import { MdOutlineLeaderboard } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const login = (id) => {
    return {
      type: "LOGIN",
      payload: id,
    };
  };
  const logout = () => {
    return {
      type: "LOGOUT",
    };
  };

  const user = useSelector((state) => state.logger.userId);
  const admin = useSelector((state) => state.logger.isAdmin);
  let auth = false;
  const dispatch = useDispatch();
  if (user != null) {
    auth = true;
  } else {
    auth = false;
  }

  return (
    <Container>
      <Body>
        <Routes>
          <Route
            path="/"
            element={
              !auth ? (
                <Navigate to="/login" />
              ) : (
                <>
                  <Header />
                  <Topics />
                  <Content />
                </>
              )
            }
          />
          <Route
            exact
            path="/profile"
            element={
              !auth ? (
                <Navigate to="/login" />
              ) : (
                <>
                  <Header />
                  <Profile />
                </>
              )
            }
          />

          <Route
            exact
            path="/login"
            element={auth.isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
          />

          <Route
            exact
            path="/admin/handleusers"
            element={
              !auth ? (
                <Navigate to="/login" />
              ) : (
                <>
                  <Header />
                  <AdminOper />
                </>
              )
            }
          />
        </Routes>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90vh;
  // margin: 5%;
`;
export default App;
