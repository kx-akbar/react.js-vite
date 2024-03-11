import React from "react";
import Modal from "./Modal.jsx";
import MenuBarOpen from "./MenuBarOpen.jsx";
import { navLists } from "../../menu/menu.js";
import { adminData } from "../../menu/menu.js";
import { brandName } from "../../menu/menu.js";
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
} from "./NavbarStyled.js";

// Navbar Component
function Navbar({ modalState, openModal }) {
  return (
    <div>
      {modalState && <Modal />}

      {/* -------------------------------------- */}

      <Main
        style={
          modalState
            ? {
                pointerEvents: "none",
                filter: "blur(2.5px)",
                userSelect: "none",
              }
            : { pointerEvents: "auto", filter: "blur(0)" }
        }
      >
        <Header>
          <HeaderTitle>{brandName.brandName || "No Brand Name"}</HeaderTitle>
        </Header>
        <AdminLogoSection>
          <AdminLogoBox>
            <AdminLogo
              src={adminData.logo}
              alt="Not Found image"
              onClick={() => openModal(!modalState)}
            />
          </AdminLogoBox>
          <AdminNameEmail>
            <AdminNameEmailTitle>{adminData.name}</AdminNameEmailTitle>
            <AdminNameEmailText>{adminData.email}</AdminNameEmailText>
          </AdminNameEmail>
        </AdminLogoSection>
        <nav>
          {navLists.map((value) => (
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

export default Navbar;
