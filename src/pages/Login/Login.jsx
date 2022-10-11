import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import LoginImg from "../../assets/Images/login-img.jpg";
import { KiviIcon } from "../../assets/Images/Icons";
import { useContext, useRef } from "react";
import { LoginContext } from "../../context/LoginContext";

export const Login = () => {
  const { setToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handeleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      email: refEmail.current.value,
      password: refPassword.current.value,
    });

    if (
      refEmail.current.value.length > 0 &&
      refPassword.current.value.length > 0
    ) {
      fetch(process.env.REACT_APP_LOGIN + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            setToken(data);
            navigate("/");
          } else {
            alert(data.error);
          }
        })
        .catch((err) => console.log(err));

      refEmail.current.value = "";
      refPassword.current.value = "";

      return;
    }

    alert("Filling is required !");
  };

  return (
    <div className="login container">
      <div className="login__content">
        <h2 className="login__title">Ваша регистрация завершена!</h2>
        <p className="login__desc">
          Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в
          виде смс на ваше телефонный номер
        </p>

        <form onSubmit={handeleSubmit} className="login__form">
          <label className="login__label" htmlFor="email">
            Введите email или номер телефона
          </label>
          <input
            ref={refEmail}
            className="login__input"
            type="email"
            id="email"
            placeholder="john@gmail.com"
          />
          <label className="login__label" htmlFor="password">
            Пароль
          </label>
          <input
            ref={refPassword}
            className="login__input"
            type="password"
            id="password"
            placeholder="***********"
          />
          <button className="login__btn" type="submit">
            Войти
          </button>
        </form>

        <span className="login__ili">или</span>
        <Link className="login__link" to="#">
          Восстоновить ваше пароль
        </Link>
      </div>

      <div className="login__image-wrap">
        <div className="login__image-kivi">
          <KiviIcon />
          <p className="login__image-text">
            Откройте для себя целую плошадку для продаже
          </p>
          <button className="login__image-btn">Как это делать?</button>
        </div>
        <img src={LoginImg} alt="Login Foto" />
      </div>
    </div>
  );
};
