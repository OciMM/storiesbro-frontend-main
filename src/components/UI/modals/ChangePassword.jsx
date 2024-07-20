import React, { useState } from "react";
import MyModal from "./MyModal";
import { Box } from "@mui/material";
import GradientButton from "../buttons/GradientButton";
import MyInput from "../input/MyInput";
import ErrorMessage from "../errors/ErrorMessage";
import { API_URL } from "../../../constants/constatns";
import axios from "axios";


const ChangePassword = ({ isChangePasswordOpen, setIsChangePasswordOpen, email }) => {
  // const handleClick = () => {
  //   setIsChangePasswordOpen(false);
  // };

  const handleConfirmForm = async () => {
    console.log("Отправка запроса активации:", `${API_URL}password_code_confirm/${email}/${password}/${passwordCodeConfirm}/`);
    const response = await axios.post(`${API_URL}password_code_confirm/${email}/${password}/${passwordCodeConfirm}/`);
    if (password === passwordConfirm && response) {
      console.log("Все работает!!!")
    } else {
      console.log("Смена пароля не получилась");
    };
    setIsChangePasswordOpen(false);
  };
  
  const error = true;
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordCodeConfirm, setPasswordCodeConfirm] = useState("");

  return (
    <MyModal
      title="Смена пароля"
      isFormOpen={isChangePasswordOpen}
      setIsFormOpen={() => setIsChangePasswordOpen(false)}
    >
      <Box>
        <MyInput
          label="Введите новый пароль"
          isPassword={true}
          value={password}
          setValue={setPassword}
        />
        <MyInput
          label="Повторите пароль"
          isPassword={true}
          value={passwordConfirm}
          setValue={setPasswordConfirm}
        />
        <MyInput
          label="Введите код подтверждения"
          value={passwordCodeConfirm}
          setValue={setPasswordCodeConfirm}
        />
        <ErrorMessage error={error} errorMessage="*Пароли не совпадают" />
        <GradientButton handleClick={handleConfirmForm}>Сохранить</GradientButton>
      </Box>
    </MyModal>
  );
};

export default ChangePassword;
