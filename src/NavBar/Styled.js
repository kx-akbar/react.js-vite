import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: rebeccapurple;
`;

export const Navbar = styled.div`
  width: 25%;
  height: 100vh;
  box-shadow: 0rem 0.5rem 0.5rem 0rem rgb(245, 246, 248);
  background: rgb(22, 37, 57);
  overflow: scroll;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  border: 0.06rem solid rgb(37, 62, 95);
`;

export const NavTitle = styled.h1`
  margin-left: 1.5rem;
  white-space: nowrap;
  color: rgb(24, 144, 255);
  font-family: Montserrat;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: 0%;
  text-align: left;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.5rem;
  height: 12vh;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.7rem;
  filter: brightness(50%);
`;

export const AdminName = styled.h1`
  color: rgb(248, 250, 252);
  font-family: Montserrat;
  font-size: 0.88rem;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 0%;
  text-align: left;
`;

const flex = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const AdminEmail = styled.p`
  color: rgb(146, 159, 175);
  font-family: Montserrat;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0%;
  text-align: left;
`;

export const AdminTitle = styled.div`
  ${flex}
`;

export const Lists = styled.div`
  ${flex}
  justify-content: center;
  width: 100%;
`;

export const ListItem = styled.p`
  display: flex;
  align-items: center;
  color: rgb(24, 144, 255);
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0%;
  text-align: left;
  user-select: none;
  cursor: pointer;
  padding-left: 1.8rem;
  font-family: sans-serif;
`;

export const ListIcon = styled.i`
  font-size: 1.2rem;
  margin-right: 0.7rem;
`;

export const ListInDisc = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: -0.7rem;
`;

export const UnorderedListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;
  text-align: center;
  position: relative;
  width: 100%;
  font-family: sans-serif;
  color: rgb(248, 250, 252);
  font-size: 0.88rem;
  font-weight: 500;
`;

export const MainListBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0.6rem 0 0.6rem 0;
  &:hover {
    background: rgb(37, 62, 95);
  }
`;

export const UnorderedList = styled.ul`
  width: 100%;
`;

export const RightOpenArrow = styled.i`
  position: absolute;
  right: 77%;
`;
