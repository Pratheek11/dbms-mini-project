import React from "react";
import styled from "styled-components";
import { RiAccountPinCircleFill } from "react-icons/ri";

const Content = () => {
  let users = [
    {
      userName: "user1",
      body: "Hello, devs 😀",
    },
    {
      userName: "user2",
      body: "MongoDb is a no-sql database.",
    },
    {
      userName: "user3",
      body: "React was developed by facebook.",
    },
  ];

  // const [recentTweets, setRecentTweets] = useState({});
  // useEffect(() => {
  //   const recentTweets = getRecent();
  // }, []);

  // const getRecent = async () => {
  //   fetch("http://localhost:8000/post/latest")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       return json;
  //     });
  // };

  return (
    <Container>
      {users.map((el) => {
        return (
          <Cover>
            <RiAccountPinCircleFill size={25} />
            <h3>{el.userName}</h3>
            <p>{el.body}</p>
          </Cover>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  // min-height: 70vh;
  // height: auto;
  height: 70vh;
  margin: 10px;
  color: #c0c0c0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    // width: 5px;
    // background-color: grey;
    // border-radius: 5px;
  }
`;
const Cover = styled.div`
  width: 90%;
  height: auto;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #008abf;
`;
export default Content;
