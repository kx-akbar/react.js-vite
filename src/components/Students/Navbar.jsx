import React, { memo, useContext } from "react";
import styled from "styled-components";
import { StudentContext } from "../../context/Student";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  padding: 1.4rem 0;
`;

const Navbar = memo(() => {
  console.log("navbar render");
  const [list] = useContext(StudentContext);
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
});

export default Navbar;
