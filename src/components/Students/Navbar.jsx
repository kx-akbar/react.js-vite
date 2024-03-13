import React, { useContext } from "react";
import styled from "styled-components";
import { StudentContext } from "../../context/StudentContext.jsx";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  padding: 1.4rem 0;
`;

function Navbar() {
  const [list] = useContext(StudentContext);
  console.log("navbar render");
  return (
    <div>
      <Nav>
        <b>Home</b>
        <b>About</b>
        <b>Contact</b>
        <b>Student {list.length}</b>
      </Nav>
    </div>
  );
}

export default Navbar;
