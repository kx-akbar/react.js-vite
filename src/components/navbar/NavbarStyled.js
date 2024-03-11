import styled, { css, keyframes } from "styled-components";


export const Main = styled.main`
  width: 25%;
  box-shadow: 0rem 0.5rem 0.5rem 0rem rgb(245, 246, 248);
  background: rgb(22, 37, 57);
  height: 100vh;
  overflow: scroll;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border: 0.06rem solid rgb(37, 62, 95);
  height: 8vh;
  padding: 16px 24px 16px 30px;
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
  padding: 0.6rem 0 0.6rem 1.5rem;
  &:hover {
    cursor: pointer;
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
  margin-left: auto;
  margin-right: 1.3rem;
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
    cursor: pointer;
    background: rgb(37, 62, 95);
  }
`;

export const ItemIcons = styled.img`
  color: rgb(146, 159, 175);
  font-size: 1.25rem;
  margin: 0 0.5rem 0 0;
`;

const popup = keyframes`

from{
  transform: translateY(-15px);
}

20%{
  transform: translateY(0);
}

40%{
  transform: translateY(-10px);
}

60%{
  transform: translateY(0);
}

80%{
  transform: translateY(-5px);
}

to{
  transform: translateY(0);
}

`;

export const ModalBox = styled.div`
  display: grid;
  justify-content: space-between;
  row-gap: 0.5rem;
  font-family: "Roboto", sans-serif;
  padding: 20px 24px 20px 24px;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #ffffff;
  animation: ${popup} 350ms linear;
`;

export const AdminName = styled.h2`
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;

export const ButtonBox = styled.div`
  display: flex;
  padding: 1rem 0 0;
  column-gap: 0.8rem;
  align-self: flex-end;
  margin-left: auto;
  margin-top: auto;
`;

const Button = css`
  padding: 10px 16px 10px 16px;
  background-color: #1890ff;
  font-family: "Roboto", sans-serif;
  font-size: 0.88rem;
  font-weight: 300;
  border: none;
  width: 5.4rem;
  cursor: pointer;
  border-radius: 0.5rem;
  text-align: center;
`;

export const CancelButton = styled.button`
  ${Button}
  border: 1px solid #ffa39e;
  color: red;
  background-color: #ffffff;
`;

export const OKButton = styled.button`
  ${Button}
  color: #F8FAFC;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
