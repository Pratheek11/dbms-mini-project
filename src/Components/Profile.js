import React from "react";
import styled from "styled-components";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
const Profile = () => {
  let user = [
    {
      userName: "user1",
      email: "thisIsMyEmail@gmail.com",
      password: "*******",
      createdAt: "10-Dec-2021",
    },
  ];

  return (
    <Container>
      <Cover>
        {user.map((el) => {
          return (
            <>
              <Pair>
                <RiAccountPinCircleFill size={200} />
              </Pair>
              <Pair>
                <p>User Name</p>
                <p>{el.userName}</p>
                <AiFillEdit size={25} />
              </Pair>
              <Pair>
                <p>Email</p>
                <p>{el.email}</p>
                <AiFillEdit size={25} />
              </Pair>
              <Pair>
                <p>Password</p>
                <p>{el.password}</p>
                <AiFillEdit size={25} />
              </Pair>
              <Pair>
                <p>Created At</p>
                <p>{el.createdAt}</p>
                <AiFillEdit size={25} />
              </Pair>
            </>
          );
        })}
      </Cover>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 70vh;
  margin: 10px;
  color: #c0c0c0;
  border: 2px solid #008abf;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cover = styled.div`
  width: 90%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ;
`;
const Pair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #008abf;
  border-radius: 5px;
  margin: 5px;
`;
export default Profile;
