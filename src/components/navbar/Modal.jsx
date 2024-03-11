import React from "react";
import { adminData } from "../../menu/menu.js";
import {
  ModalBox,
  AdminName,
  ButtonBox,
  OKButton,
  CancelButton,
  ModalContainer,
} from "./NavbarStyled.js";

function Modal({ modalState, openModal }) {
  const handleOpenModal = function (args) {
    openModal(!args);
  };
  return (
    <div>
      {modalState ? (
        <ModalContainer>
          <ModalBox>
            <img src={adminData.logo} alt="Not Found Images" />
            <AdminName>
              Admin Name: <b>{adminData.name || "No name"}</b>
            </AdminName>
            <p>Admin Email: {adminData.email || "No email"}</p>
            <ButtonBox>
              <CancelButton onClick={() => handleOpenModal(modalState)}>
                Cancel
              </CancelButton>
              <OKButton onClick={() => handleOpenModal(modalState)}>
                OK
              </OKButton>
            </ButtonBox>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </div>
  );
}

export default Modal;
