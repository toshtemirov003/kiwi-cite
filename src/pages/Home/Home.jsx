import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Airplane,
  AppStore,
  BiznesUslugu,
  DomiSad,
  Elektronika,
  LichnieVeshi,
  LogoTop,
  Nedvijemost,
  PlayMarket,
  PokazatIsho,
  Rabota,
  StrelkaChap,
  StrelkaOng,
  StroykaRemont,
  XobbiiSport,
} from "../../assets/Images/Icons";
import { Footer } from "../../components/Footer/Footer";
import "./home.css";
import Noutbook from "../../assets/Images/noutbook.png";
import Sumka from "../../assets/Images/sumka.png";
import Stull from "../../assets/Images/stull.png";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  const [product, setProduct] = useState({
    isFetched: false,
    data: [],
    isError: null,
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + "/products/")
      .then((data) =>
        setProduct({
          isFetched: true,
          data: data.data,
          isError: false,
        })
      )
      .catch((err) =>
        setProduct({
          isFetched: false,
          data: [],
          isError: err,
        })
      );
  }, []);

  return (
    <div className="jobs">
      <div className="jobs__container container">
        <StrelkaChap />
        <ul className="jobs__list">
          <li className="jobs__item">
            <Airplane />
            <span className="jobs__item-title">{t("footer.moshina")}</span>
          </li>
          <li className="jobs__item">
            <Nedvijemost />
            <span className="jobs__item-title">{t("footer.mulk")}</span>
          </li>
          <li className="jobs__item">
            <Elektronika />
            <span className="jobs__item-title">{t("footer.elektronika")}</span>
          </li>
          <li className="jobs__item">
            <Rabota />
            <span className="jobs__item-title">{t("footer.ish")}</span>
          </li>
          <li className="jobs__item">
            <LichnieVeshi />
            <span className="jobs__item-title">{t("footer.shaxsiyNarsa")}</span>
          </li>
          <li className="jobs__item">
            <DomiSad />
            <span className="jobs__item-title">{t("footer.uyvabog")}</span>
          </li>
          <li className="jobs__item">
            <StroykaRemont />
            <span className="jobs__item-title">{t("footer.qurilish")}</span>
          </li>
          <li className="jobs__item">
            <XobbiiSport />
            <span className="jobs__item-title">{t("footer.damolish")}</span>
          </li>
          <li className="jobs__item">
            <BiznesUslugu />
            <span className="jobs__item-title">{t("footer.biznes")}</span>
          </li>
        </ul>
        <StrelkaOng />

        <section className="product product-axios container">
          <div className="product__title-wrap">
            <Link to="#" className="product__title">
              {t("main.yangiElon")}
            </Link>
            <Link to="#" className="product__title-2">
              {t("main.taklif")}
            </Link>
          </div>

          <ul className="product__list">
            {product.isFetched &&
            !product.isError &&
            product.data.length > 0 ? (
              product.data.map((item) => (
                <li key={item.id} className="product__item">
                  <Link
                    className="product__item-link"
                    to={`/product/${item.id}`}
                  >
                    <img
                      className="product__item-img"
                      src={item.image}
                      alt="Photos"
                      width="262"
                      height="190"
                    />
                    <h2 className="product__item-title">{item.title}</h2>
                    <span className="product__item-data">Вчера 22:55</span>
                    <p className="product__item-price">{item.price} сум ($)</p>
                  </Link>
                </li>
              ))
            ) : (
              <strong style={{ fontSize: "40px", margin: "0 auto" }}>
                Loading...
              </strong>
            )}
          </ul>
          <button className="product__btn-yana">
            {t("main.koproqKorish")} <PokazatIsho />
          </button>
        </section>
      </div>

      <section className="brend">
        <div className="brend__container ">
          <div className="brend__item">
            <div className="brend__item-content">
              <strong className="brend__item-text">
                Техника Apple по доступным ценам
              </strong>
              <button className="brend__item-btn">987 обьявлениий</button>
            </div>
            <img
              src={Noutbook}
              alt=""
              className="brend__item-img1"
              width={302}
              height={175}
            />
          </div>

          <div className="brend__item brend__item--sumka ">
            <div className="brend__item-content">
              <strong className="brend__item-text">
                Брендовые товары за копейки
              </strong>
              <button className="brend__item-btn">987 обьявлениий</button>
            </div>
            <img
              src={Sumka}
              alt=""
              className="brend__item-img2"
              width={194}
              height={294}
            />
          </div>

          <div className="brend__item brend__item--stull">
            <div className="brend__item-content">
              <strong className="brend__item-text">
                Все товары для офиса в одном месте
              </strong>
              <button className="brend__item-btn">987 обьявлениий</button>
            </div>
            <img
              src={Stull}
              alt=""
              className="brend__item-img3"
              width={209}
              height={243}
            />
          </div>

          <div className="brend__item brend__item--sumka ">
            <div className="brend__item-content">
              <strong className="brend__item-text">
                Брендовые товары за копейки
              </strong>
              <button className="brend__item-btn">987 обьявлениий</button>
            </div>
            <img
              src={Sumka}
              alt=""
              className="brend__item-img2"
              width={194}
              height={294}
            />
          </div>
        </div>
      </section>

      <section className="top-content container">
        <div className="product__title-wrap">
          <Link to="#" className="product__title">
            Просмотренные
          </Link>
          <Link to="#" className="product__title-2">
            Выбор редакции
          </Link>
          <Link to="#" className="product__title-2">
            Сниженные цены
          </Link>
        </div>

        <ul className="top-content__list container">
          {product.isFetched && !product.isError && product.data.length > 0 ? (
            product.data.map((item, index) => (
              <li key={index} className="top-content__item">
                <Link
                  className="top-content__item-link"
                  to={`/product/${item.id}`}
                >
                  <img
                    className="top-content__item-img"
                    src={item.image}
                    alt="Photos"
                    width="262"
                    height="190"
                  />
                  <h2 className="top-content__item-title">{item.title}</h2>
                  <span className="top-content__item-data">Вчера 22:55</span>
                  <p className="top-content__item-price">
                    {item.price} сум ($)
                  </p>
                </Link>
              </li>
            ))
          ) : (
            <strong style={{ fontSize: "40px", margin: "0 auto" }}>
              Loading...
            </strong>
          )}
        </ul>

        <button className="product__btn-yana">
          Покозать еще <PokazatIsho />
        </button>

        <div className="top-content__links container">
          <LogoTop />
          <div className="top-content__links-app">
            <AppStore />
            <PlayMarket />
          </div>
        </div>
      </section>
      {/* {!token ? <Footer /> : ""} */}
      <Footer />
    </div>
  );
};
