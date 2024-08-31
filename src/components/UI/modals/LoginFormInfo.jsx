import { Box, Link, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import GradientButton from "../buttons/GradientButton";
import MyInput from "../input/MyInput";
import axios from "axios";
import { setTokken } from "../../../store/userReducer";
import { useDispatch } from "react-redux";
import { API_URL } from "../../../constants/constatns";
import ConfirmationForm from "./ConfirmationForm";

import { useNavigate } from 'react-router-dom';
import * as VKID from '@vkid/sdk'; // Импорт VKID SDK

const LoginFormInfo = ({
  handleChangeConfirm,
  handleChangePassword,
  handleRegistrationForm,
  setIsLoginFormOpen,
  setIsConfirmPageOpen,
  handleConfirmForm
}) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Инициализация VKID SDK
    VKID.Config.init({
      app: '51786441',  // Замените 'YOUR_APP_ID' на ваш VK app ID
      redirectUrl: 'https://storisbro.com/auth',  // Укажите ваш redirect URL
      state: 'state',  // Дополнительный параметр состояния
      codeVerifier: 'codeVerifier',  // Дополнительный параметр
      scope: 'phone email',  // Запрашиваемые разрешения
    });

    const oneTap = new VKID.OneTap();
    const container = document.getElementById('VkIdSdkOneTap');

    if (container) {
      oneTap
        .render({ container })
        .on(VKID.WidgetEvents.ERROR, console.error);
    }
  }, []);

  const handleConfirmFormInternal = () => {
    const email_lower = email.toLowerCase();
    axios
      .post(`${API_URL}login/`, {
        email: email_lower,
        password: password,
      }, { withCredentials: true, headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), }
      })
      .then(function (response) {
        setUserId(response.data.id);
        handleConfirmForm(response.data.id);
        setIsConfirmPageOpen(true);
        setIsLoginFormOpen(false);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data["access"];

        localStorage.setItem("token", response.data["access"]);
        localStorage.setItem("refresh", response.data["refresh"]);
        localStorage.setItem("id", response.data["id"]);
        localStorage.setItem("count_of_visit", response.data["count_of_visit"] + 1);
        localStorage.setItem("UID", response.data["UID"]);
        localStorage.setItem("vk_id", response.data["vk_id"]);
        localStorage.setItem('is_active', response.data["is_active"]);
        localStorage.setItem("statusAccount", "admin");
        dispatch(setTokken(response.data["access"]));
        
        const checkStatus = localStorage.getItem("statusAccount");

        if (checkStatus === "admin") {
          navigate('/admin');
        } else if (checkStatus === "customer") {
          navigate('/customer');
        }
      })
      .catch(function (error) {
        setError(true); // Устанавливаем флаг ошибки в true при ошибке запроса
      });
  };

  return (
    <>
      <MyInput label="Введите почту" value={email} setValue={setEmail} />
      <MyInput
        label="Введите пароль"
        isPassword={true}
        value={password}
        setValue={setPassword}
      />
      <ErrorMessage
        error={error}
        errorMessage="*опа, ошибка в логине, либо в пароле"
      />
      <Link
        sx={{
          textAlign: "right",
          color: "#E37E31",
          textDecoration: "underline #E37E31",
          mb: 3,
          fontSize: "16px",
          fontWeight: 400,
          cursor: "pointer",
        }}
        onClick={() => handleChangeConfirm()}
      >
        Восстановить пароль
      </Link>
      <GradientButton handleClick={handleConfirmFormInternal}>Войти</GradientButton>
      <Box sx={{ mt: 1, mb: 1 }}></Box>
      <Box id="VkIdSdkOneTap" sx={{ mt: 2 }}></Box> {/* Контейнер для рендера VKID */}
      <Typography
        sx={{
          mt: 2,
          textAlign: "center",
          fontSize: "18px",
          fontWeight: 400,
        }}
      >
        Нет аккаунта?
        <Link
          onClick={() => handleRegistrationForm()}
          sx={{
            color: "#E37E31",
            textDecoration: "underline #E37E31",
            cursor: "pointer",
          }}
        >
          Зарегистрироваться
        </Link>
      </Typography>
    </>
  );
};

export default LoginFormInfo;