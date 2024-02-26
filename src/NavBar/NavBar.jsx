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
  ModalBox,
  AdminName,
  ButtonBox,
  OKButton,
  CancelButton,
  ModalContainer,
} from "./Styled.js";
import { AdminData } from "./Lists.js";
import { BrandName } from "./Lists.js";

// Menu bar Component
const MenuBarOpen = function ({ title, data, iconClass }) {
  const [open, setOpen] = useState(false);

  const handleClick = function () {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem
        onClick={handleClick}
        className="list"
        style={
          open
            ? { background: "rgb(37, 62, 95)" }
            : { background: "transparent" }
        }
      >
        <ItemIcons src={iconClass}></ItemIcons>
        <ListName
          style={
            open && data.length > 0
              ? {
                  color: "rgb(24, 144, 255)",
                }
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

// NavBar Component
function NavBar() {
  const [viewModal, setViewModal] = useState(false);
  const onViewModalBox = function () {
    setViewModal(!viewModal);
  };

  return (
    <div>
      {viewModal ? (
        <ModalContainer style={viewModal ? { backdropFilter: "20px" } : null}>
          <ModalBox>
            <img src={AdminData.logo} alt="Not Found Images" />
            <AdminName>
              Admin Name: <b>{AdminData.name || "No name"}</b>
            </AdminName>
            <p>Admin Email: {AdminData.email || "No email"}</p>
            <ButtonBox>
              <CancelButton onClick={onViewModalBox}>Cancel</CancelButton>
              <OKButton onClick={onViewModalBox}>OK</OKButton>
            </ButtonBox>
          </ModalBox>
        </ModalContainer>
      ) : null}

      {/* --------------------------------------------------------------------------------- */}

      <Main
        style={
          viewModal
            ? {
                pointerEvents: "none",
                filter: "blur(2.5px)",
                userSelect: "none",
              }
            : { pointerEvents: "auto", filter: "blur(0)" }
        }
      >
        <Header>
          <HeaderTitle>{BrandName.brandName || "No Brand Name"}</HeaderTitle>
        </Header>
        <AdminLogoSection>
          <AdminLogoBox>
            <AdminLogo
              src={AdminData.logo}
              alt="Not Found image"
              onClick={onViewModalBox}
            />
          </AdminLogoBox>
          <AdminNameEmail>
            <AdminNameEmailTitle>{AdminData.name}</AdminNameEmailTitle>
            <AdminNameEmailText>{AdminData.email}</AdminNameEmailText>
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
