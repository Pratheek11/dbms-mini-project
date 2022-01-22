import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
const AdminOper = () => {
  let users = [
    {
      userName: "user1",
      createdAt: "10-Dec-2021",
    },
    {
      userName: "user2",
      createdAt: "11-Jan-2021",
    },
    {
      userName: "user3",
      createdAt: "20-Dec-2021",
    },
  ];

  return (
    <Container>
      <Cover>
        {users.map((el) => {
          return (
            <>
              <Pair>
                <h3>{el.userName}</h3>
                <p>{el.createdAt}</p>
                <MdDelete size={30} color="red" />
              </Pair>
            </>
          );
        })}
      </Cover>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  height: 70vh;
  margin: 10px;
  color: #c0c0c0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #008abf;
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
export default AdminOper;
