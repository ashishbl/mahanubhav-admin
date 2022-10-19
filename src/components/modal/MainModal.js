import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";
import { FiTrash2 } from "react-icons/fi";

import UserServices from "../../services/UserServices";
import AdminServices from "../../services/AdminServices";
import CouponServices from "../../services/CouponServices";
import ProductServices from "../../services/ProductServices";
import CategoryServices from "../../services/CategoryServices";
import CalenderServices from "../../services/CalenderServices";
import { SidebarContext } from "../../context/SidebarContext";
import { notifyError, notifySuccess } from "../../utils/toast";

const MainModal = ({ id }) => {
  const { isModalOpen, closeModal, setIsUpdate } = useContext(SidebarContext);
  const location = useLocation();

  const handleDelete = () => {
    if (location.pathname === "/products") {
      ProductServices.deleteProduct(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
    if (location.pathname === "/category") {
      CategoryServices.deleteCategory(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
    if (location.pathname === "/customers") {
      UserServices.deleteUser(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
    if (location.pathname === "/coupons") {
      CouponServices.deleteCoupon(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
    if (location.pathname === "/our-staff") {
      AdminServices.deleteStaff(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
    if (location.pathname === "/books") {
      CalenderServices.deleteBook(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
    if (location.pathname === "/bhajan") {
      CalenderServices.deleteBhajan(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeModal();
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
          <span className="flex justify-center text-3xl mb-6 text-red-500">
            <FiTrash2 />
          </span>
          <h2 className="text-xl font-medium mb-1">
            {/* Are You Sure! Want to Delete This Record? */}
            तुला खात्री आहे! हा रेकॉर्ड हटवायचा आहे का?
          </h2>
          <p>
            तुम्हाला हे रेकॉर्ड खरोखर हटवायचे आहेत का? तुम्ही हटवल्यास हे यापुढे
            तुमच्या सूचीमध्ये पाहू शकणार नाही!
          </p>
        </ModalBody>
        <ModalFooter className="justify-center">
          <Button
            className="w-full sm:w-auto hover:bg-white hover:border-gray-50"
            layout="outline"
            onClick={closeModal}
          >
            {/* No, Keep It */}
            नाही, ठेवा
          </Button>
          <Button onClick={handleDelete} className="w-full sm:w-auto">
            {/* Yes, Delete It */}
            होय! ते हटवा
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default React.memo(MainModal);
