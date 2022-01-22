import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiAccountPinCircleFill } from "react-icons/ri";

const Header = () => {
  const [slider, setSlider] = useState(false);
  const slide = () => {
    setSlider(!slider);
  };
  return (
    <Container>
      <Cover>
        <h1>Dev.</h1>
        <Contents>
          <span>
            <RiAccountPinCircleFill onClick={slide} size={30} />
          </span>
        </Contents>
      </Cover>
      {slider ? (
        <Options>
          <Li>
            <Link to="/">
              <a>Home</a>
            </Link>
            <Link to="/profile">
              <a>Profile</a>
            </Link>
            <Link to="/admin/handleusers">
              <a>HandleUsers</a>
            </Link>
            <Link to="/login">
              <a>Logout</a>
            </Link>
            {/* <Link><a>Settings</a></Link>
                        <Link><a>Log out</a></Link> */}
          </Li>
        </Options>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  // position: fixed;
  width: 100%;
  height: 8%;
  background-color: #171717;
  color: #c0c0c0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cover = styled.div`
  width: 70%;
  height: 70%;
  margin: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    cursor: pointer;
  }
`;
const Options = styled.div`
  position: absolute;
  width: 8%;
  height: 20%;
  top: 8%;
  right: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 1) 0px 2px 8px 0px;
  background-color: #181818;
  transition: all 1s ease;
`;
const Li = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 80%;

  a {
    cursor: pointer;
  }
`;

export default Header;
