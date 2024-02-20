import styled from "styled-components";

export const Main = styled.main`
  width: 25%;
  box-shadow: 0rem 0.5rem 0.5rem 0rem rgb(245, 246, 248);
  background: rgb(22, 37, 57);
  height: 100vh;
  overflow: scroll;
`;

export const Header = styled.header`
  width: 100%;
  border: 0.06rem solid rgb(37, 62, 95);
  height: 11vh;
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const HeaderTitle = styled.h1`
  color: rgb(24, 144, 255);
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: 0%;
`;

export const AdminLogoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;
`;

export const AdminLogoBox = styled.div`
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const AdminLogo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  filter: contrast(50%);
`;

export const AdminNameEmail = styled.div`
  margin-top: -3px;
`;

export const AdminNameEmailTitle = styled.h3`
  color: rgb(248, 250, 252);
  font-family: "Roboto", sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

export const AdminNameEmailText = styled.p`
  color: rgb(146, 159, 175);
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0%;
  text-align: left;
`;

export const ListItem = styled.article`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.6rem 0 0.6rem 1.5rem;
  &:hover {
    background: rgb(37, 62, 95);
  }
`;

export const ListName = styled.b`
  color: rgb(248, 250, 252);
  font-family: "Roboto", sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0%;
  user-select: none;
  text-align: left;
`;

export const Arrow = styled.i`
  position: absolute;
  right: 1.5rem;
  font-size: 1.1rem;
  color: rgb(24, 144, 255);
`;

export const UlListItem = styled.ul`
  text-align: center;
  color: rgb(248, 250, 252);
  font-family: "Roboto", sans-serif;
  font-size: 0.88rem;
  font-weight: 300;
  line-height: 1.25rem;
  letter-spacing: 0%;
  padding: 0.7rem 0 0.7rem 0;
  &:hover {
    background: rgb(37, 62, 95);
  }
`;

export const ItemIcons = styled.i`
  color: rgb(146, 159, 175);
  font-size: 1.25rem;
  margin: 0 0.5rem 0 0;
`;
