import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";
import { Footer } from "../../components/Footer/Footer";
import { FooterSmall } from "../../components/FooterSmall/FooterSmall";
import "./product.css";
import {
  PokazatIsho,
  SearchIcon,
  SearchIconMini,
} from "../../assets/Images/Icons";

export const Product = () => {
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
    <div className="products">
      <div className="products__container container">
        <SearchHeader />
        <ul className="product__list">
          {product.isFetched && !product.isError && product.data.length > 0 ? (
            product.data.map((item) => (
              <li key={item.title} className="product__item products__item">
                <Link className="product__item-link" to={`/product/${item.id}`}>
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
        .
        <button className="product__btn-yana products__btn">
          Покозать еще (20) <PokazatIsho />
        </button>
        <div className="now">
          <span className="now__icon">
            <SearchIcon />
          </span>
          <strong className="now__title">СЕЙЧАС ИЩУТ</strong>

          <div className="get-product">
            <div className="get-product__content">
              <Link href="#" className="get-product__text">
                купить Мясная продукция
              </Link>
              <span className="get-product__icon">
                <SearchIconMini />
              </span>
              <span className="get-product__data">2 часа назад</span>
            </div>
            <div className="get-product__content get-product__content--mg">
              <Link href="#" className="get-product__text">
                купить Мясная продукция
              </Link>
              <span className="get-product__icon">
                <SearchIconMini />
              </span>
              <span className="get-product__data">2 часа назад</span>
            </div>
            <div className="get-product__content get-product__content--mg">
              <Link href="#" className="get-product__text">
                купить Мясная продукция
              </Link>
              <span className="get-product__icon">
                <SearchIconMini />
              </span>
              <span className="get-product__data">2 часа назад</span>
            </div>
            <div className="get-product__content get-product__content--mg">
              <Link href="#" className="get-product__text">
                купить Мясная продукция
              </Link>
              <span className="get-product__icon">
                <SearchIconMini />
              </span>
              <span className="get-product__data">2 часа назад</span>
            </div>
            <div className="get-product__content get-product__content--mg">
              <Link href="#" className="get-product__text">
                купить Мясная продукция
              </Link>
              <span className="get-product__icon">
                <SearchIconMini />
              </span>
              <span className="get-product__data">2 часа назад</span>
            </div>
          </div>
        </div>
        <div className="interesting">
          <h2 className="interesting-title">САМОЕ ИНТЕРЕСНОЕ</h2>
          <ul className="top-content__list interesting__list">
            {product.isFetched &&
            !product.isError &&
            product.data.length > 0 ? (
              product.data.map((item, index) => (
                <li key={index} className="top-content__item interesting__item">
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
        </div>
      </div>
      <FooterSmall />
      <Footer />
    </div>
  );
};
