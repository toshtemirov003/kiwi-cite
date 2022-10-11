import "./footerSmall.css"
import { Link } from "react-router-dom";
import { AppStore, LogoTop, PlayMarket } from "../../assets/Images/Icons";

export const FooterSmall = () => {
  return (
    <footer className="profile__footer">
      <div className="profile__footer-container container">
        <Link className="footer__logo-links" to="/">
          <LogoTop />
          <p className="footer__logo-text">
            Продай, найди, купи все что ты пожелаешь{" "}
          </p>
        </Link>
        <p className="footer__desc">
          Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
          обяления
        </p>
        <div className="footer__logos">
          <AppStore />
          <PlayMarket />
        </div>
      </div>
    </footer>
  );
};
