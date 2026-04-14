import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import styles from "./Login.module.css";
import { userSignup } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!username.trim()) {
      newErrors.username = "Введите логин";
    }
    if (!password.trim()) {
      newErrors.password = "Введите пароль";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const result = await userSignup({ username, password });

    login(result.accessToken);
    navigate("/table", { replace: true });
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.logo} />

        <h1 className={styles.title}>Добро пожаловать!</h1>
        <p className={styles.subtitle}>Пожалуйста, авторизуйтесь</p>

        <div className={styles.field}>
          <label>Логин</label>
          <div className={styles.inputWrapper}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите логин"
            />
          </div>
          {errors.username && (
            <span className={styles.error}>{errors.username}</span>
          )}
        </div>

        <div className={styles.field}>
          <label>Пароль</label>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>

        <div className={styles.options}>
          <label className={styles.checkbox}>
            <input type="checkbox" />
            <span>Запомнить данные</span>
          </label>
        </div>

        <button className={styles.button} type="submit">
          Войти
        </button>

        <div className={styles.divider}>
          <span>или</span>
        </div>

        <div className={styles.footer}>
          Нет аккаунта? <a href="#">Создать</a>
        </div>
      </form>
    </div>
  );
};

export default Login;