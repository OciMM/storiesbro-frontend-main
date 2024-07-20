import React, { useState } from "react";

import MyModal from "./MyModal";
import ConfirmationForm from "./ConfirmationForm";
import ChangePassword from "./ChangePassword";
import LoginFormInfo from "./LoginFormInfo";
import RegistrationForm from "./RegistrationForm";
import axios from "axios";
import ConfirmationChangePassword from "./ConfirmationChangePassword";

const LoginForm = ({ isLoginFormOpen, setIsLoginFormOpen }) => {
  const handleChangeConfirm = () => {
    setIsLoginFormOpen(false);
    setIsChangeConfirm(true);
  };

  const handleChangePassword = () => {
    setIsLoginFormOpen(false);
    setIsChangePasswordOpen(true);
  };

  const handleRegistrationForm = () => {
    setIsLoginFormOpen(false);
    setIsRegistrationForm(true);
  };

  const handleLoginForm = () => {
    setIsRegistrationForm(false);
    setIsLoginFormOpen(true);
  };

  const [isConfirmFormOpen, setIsConfirmPageOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isChangeConfirm, setIsChangeConfirm] = useState(false);
  const [isRegistrationForm, setIsRegistrationForm] = useState(false);
  const [yourEmail, setYourEmail] = useState("")
  const [userId, setUserId] = useState(null)

  const openChangePassword = (yourEmail) => {
    setIsLoginFormOpen(false);
    setIsChangePasswordOpen(true);
    setYourEmail(yourEmail)
  };

  return (
    <>
      <ConfirmationForm
        isConfirmFormOpen={isConfirmFormOpen}
        setIsConfirmPageOpen={setIsConfirmPageOpen}
        userId={userId}
      />
      <ChangePassword
        isChangePasswordOpen={isChangePasswordOpen}
        setIsChangePasswordOpen={setIsChangePasswordOpen}
        email={yourEmail}
      />
      <ConfirmationChangePassword
        isChangePasswordOpen={isChangeConfirm}
        setIsChangePasswordOpen={setIsChangeConfirm}
        openChangePassword={openChangePassword}
      />

      <RegistrationForm
        isRegistrationForm={isRegistrationForm}
        setIsRegistrationForm={setIsRegistrationForm}
        handleLoginForm={handleLoginForm}
      />

      <MyModal
        title="Вход"
        isFormOpen={isLoginFormOpen}
        setIsFormOpen={() => setIsLoginFormOpen(false)}
      >
        <LoginFormInfo
          setIsLoginFormOpen={setIsLoginFormOpen}
          handleConfirmForm={(userId) => {
            setIsConfirmPageOpen(true);
            setUserId(userId);
          }}
          handleChangeConfirm={handleChangeConfirm}
          setIsConfirmPageOpen={setIsConfirmPageOpen}
          handleChangePassword={handleChangePassword}
          handleRegistrationForm={handleRegistrationForm}
        />
      </MyModal>
    </>
  );
};

export default LoginForm;
