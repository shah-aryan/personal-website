import React from "react";
import { XIcon } from "@heroicons/react/outline";
import Modal from "react-modal";
import classnames from "classnames";

const ContactModal = ({ toggleOpen, toggleClose, children, className }) => {
  const modalClassNames = classnames(
    className,
    "modal",
    // eslint-disable-next-line comma-dangle
    "absolute my-auto mx-6 top-0 bottom-0 right-0 left-0 bg-white rounded-lg max-w-[565px] h-[435px] bg-primary-500 pt-10 sm:mx-auto md:h-[500px] dark:bg-white"
  );

  return (
    <div className="w-full">
      <Modal
        ariaHideApp={false}
        className={modalClassNames}
        overlayClassName={"modal-overlay"}
        isOpen={toggleOpen}
        onRequestClose={toggleClose}
      >
        <button
          className="absolute flex justify-end right-4 top-4 z-[150] text-white dark:text-primary-500"
          onClick={toggleClose}
        >
          {" "}
          <XIcon className="w-10 h-10" />
        </button>
        <div className="w-full  dark:text-white">{children}</div>
      </Modal>
    </div>
  );
};

export default ContactModal;
