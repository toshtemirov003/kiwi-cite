import "./header.css";
import { Logo, ProfilImage } from "../../assets/Images/Icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { token } = useContext(LoginContext);

  const handleChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };  

  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header__logo" to="/">
          <Logo />
          <p className="header__logo-text">{t("header.logo")}</p>
        </Link>
        <nav>
          <ul className="header__list">
            <li className="header__item">
              <Link className="header__item-link" to="/product">
                {t("header.elon")}
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__item-link" to="/add-product">
                {t("header.magazin")}
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__item-link" to="/business">
                {t("header.biznes")}
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__item-link" to="/help">
                {t("header.yordam")}
              </Link>
            </li>
          </ul>
        </nav>

        <select className="language" onClick={handleChangeLang}>
          <option value="ru">Ru</option>
          <option value="uz">Uz</option>
        </select>

        {/* <div className="header__lang">
        <button
          onClick={handleChangeLang}
          className="header__lang-rus"
          type="button"
        >
          Рус
        </button>
        <span className="header__lang-border">|</span>
        <button
          onClick={handleChangeLang}
          className="header__lang-uz"
          type="button"
        >
          O’z
        </button>
      </div> */}

        {token ? (
          <Link to="/profile" className="header__profil">
            <span className="header__profil-name">Темиров</span>
            <ProfilImage />
          </Link>
        ) : (
          <div className="header__login">
            <Link className="header__login-kirish" to="/login">
              {t("header.kirish")}
            </Link>
            <span className="header__login-bd">|</span>
            <Link className="header__login-registratsiya" to="/registratsiya">
              {t("header.royxatdanOtish")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
