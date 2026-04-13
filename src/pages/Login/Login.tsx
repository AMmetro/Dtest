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
      newErrors.username = "Username cannot be empty";
    }
    if (!password.trim()) {
      newErrors.password = "Password cannot be empty";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const result = await userSignup({ username, password });

    login(result.accessToken);
    navigate("/table", { replace: true });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          {errors.username && (
            <div className={styles.error}>{errors.username}</div>
          )}
        </div>

        <div className={styles.field}>
          <input
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}
        </div>

        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;