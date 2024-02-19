import React, { useState } from "react";
import logo from "../assets/user-logo.png";
import { NavLists } from "./Lists.js";
import {
  Container,
  Navbar,
  HeaderNav,
  NavTitle,
  Logo,
  LogoContainer,
  AdminName,
  AdminTitle,
  AdminEmail,
  Lists,
  ListItem,
  ListIcon,
  ListInDisc,
  MainListBox,
  UnorderedListItem,
  UnorderedList,
  RightOpenArrow,
} from "./Styled";

const MenuBar = function ({ title, data, iconClass }) {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen(!open);
  };

  return (
    <MainListBox>
      <ListItem onClick={handleOpenClose}>
        <ListIcon className={iconClass}></ListIcon>
        {title}
        {data.length > 0 ? (
          <RightOpenArrow
            className="fa-solid fa-chevron-right"
            style={
              open
                ? { transform: "rotate(90deg)" }
                : { transform: "rotate(0deg)" }
            }
          ></RightOpenArrow>
        ) : null}
      </ListItem>
      {open && (
        <ListInDisc>
          {data && data.length > 0 ? (
            <UnorderedList type="none">
              {data.map((value, index) => (
                <UnorderedListItem key={index}>{value}</UnorderedListItem>
              ))}
            </UnorderedList>
          ) : null}
        </ListInDisc>
      )}
    </MainListBox>
  );
};

function NavBar() {
  return (
    <div>
      <Container>
        <Navbar>
          <HeaderNav>
            <NavTitle>Webbrain.crm</NavTitle>
          </HeaderNav>
          <LogoContainer>
            <Logo src={logo} alt="Not Found" />
            <AdminTitle>
              <AdminName>Sardorbek Muhtorov</AdminName>
              <AdminEmail>s.muhtorov@gmail.com</AdminEmail>
            </AdminTitle>
          </LogoContainer>
          <Lists>
            {NavLists.map((value) => (
              <MenuBar
                key={value.id}
                title={value.title}
                data={value.data}
                iconClass={value.iconClass}
              />
            ))}
          </Lists>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
