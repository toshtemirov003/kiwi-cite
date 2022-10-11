import { Link, Outlet } from "react-router-dom";
import { FooterSmall } from "../../components/FooterSmall/FooterSmall";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__route">
        <div className="profile__route-container container">
          <Link
            className="profile__route-link profile__route-link--static active"
            to="/profile/elonlar"
          >
            Объявления
          </Link>
          <Link className="profile__route-link" to="/profile/xabarlar">
            Сообщения
          </Link>
          <Link className="profile__route-link" to="/profile/hisob">
            Платежи и счёт
          </Link>
          <Link className="profile__route-link" to="/profile/settings">
            Настройки
          </Link>
          <Link className="profile__route-link" to="/profile/biznes">
            Мой бизнес
          </Link>
        </div>
      </div>
      <Outlet />
      <FooterSmall />
    </div>
  );
};
