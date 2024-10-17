import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../redux/slices/authSlice";
import Register from "../components/Register";
import Modal from "../components/modal";
import Login from "../components/Login";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [isRegister, setIsRegister] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsRegister(false);
  };
  return isAuthenticated ? (
    element
  ) : (
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      element={
        isRegister ? (
          <Register
            onRegisterSuccess={() => setIsRegister(false)}
            onClose={handleCloseModal}
          />
        ) : (
          <Login
            onRegisterClick={() => setIsRegister(true)}
            onClose={handleCloseModal}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
