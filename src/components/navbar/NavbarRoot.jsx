import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Modal from "./Modal.jsx";

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
