import React from "react";
import FolderModal from "../modals/FolderModal";
import PlanModal from "../modals/PlanModal";

const ModalProvider = () => {
  return (
    <div className="fixed">
      <FolderModal />
      <PlanModal />
    </div>
  );
};

export default ModalProvider;