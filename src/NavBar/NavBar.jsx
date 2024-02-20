import React, { useState } from "react";
import { NavLists } from "./Lists.js";
import {
  Main,
  Header,
  HeaderTitle,
  AdminLogoSection,
  AdminLogoBox,
  AdminLogo,
  AdminNameEmail,
  AdminNameEmailTitle,
  AdminNameEmailText,
  ListItem,
  ListName,
  Arrow,
  UlListItem,
  ItemIcons,
} from "./Styled.js";
import logo from "../assets/user-logo.png";

const MenuBarOpen = function ({ title, data, iconClass }) {
  const [open, setOpen] = useState(false);

  const handleClick = function () {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem onClick={handleClick} className="list">
        <ItemIcons className={iconClass} id="icons"></ItemIcons>
        <ListName
          style={
            open && data.length > 0
              ? { color: "rgb(24, 144, 255)" }
              : { color: "rgb(248, 250, 252)" }
          }
        >
          {title}
        </ListName>
        {data.length > 0 ? (
          <Arrow
            className="fa-solid fa-chevron-right"
            style={
              open
                ? { transform: "rotate(91.5deg)" }
                : { transform: "rotate(0)" }
            }
          ></Arrow>
        ) : null}
      </ListItem>
      {/* ----------------------------------------------------- */}
      {open && (
        <div>
          {data && data.length > 0 ? (
            <ul type="none" className="disc-list">
              {data.map((val, index) => {
                return <UlListItem key={index}>{val}</UlListItem>;
              })}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
};

function NavBar() {
  return (
    <div>
      <Main>
        <Header>
          <HeaderTitle>Webbrain.crm</HeaderTitle>
        </Header>
        <AdminLogoSection>
          <AdminLogoBox>
            <AdminLogo src={logo} alt="Not Found image" />
          </AdminLogoBox>
          <AdminNameEmail>
            <AdminNameEmailTitle>Sardorbek Muhtorov</AdminNameEmailTitle>
            <AdminNameEmailText>s.muhtorov@gmail.com</AdminNameEmailText>
          </AdminNameEmail>
        </AdminLogoSection>
        <nav>
          {NavLists.map((value) => (
            <MenuBarOpen
              key={value.id}
              title={value.title}
              data={value.data}
              iconClass={value.iconClass}
            />
          ))}
        </nav>
      </Main>
    </div>
  );
}

export default NavBar;
