import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Modal from "../components/navbar/Modal.jsx";

function Root() {
  const [viewModal, setViewModal] = useState(false);
  const onViewModalBox = function (bool) {
    setViewModal(bool);
  };

  return (
    <div>
      <Navbar modalState={viewModal} openModal={onViewModalBox} />
      <Modal modalState={viewModal} openModal={onViewModalBox} />
    </div>
  );
}

export default Root;
