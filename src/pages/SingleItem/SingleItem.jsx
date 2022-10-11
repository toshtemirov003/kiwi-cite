import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { FooterSmall } from "../../components/FooterSmall/FooterSmall";
import "./singleItem.css";

export const SingleItem = () => {
  const [single, setSingle] = useState({
    isFetched: false,
    data: [],
    isError: null,
  });
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(
        (data) =>
          setSingle({
            isFetched: true,
            data: [data.data],
            isError: false,
          })
        // console.log(data.data)
      )
      .catch((err) =>
        setSingle({
          isFetched: false,
          data: [],
          isError: err,
        })
      );
  }, [productId]);

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
    <div className="single">
      <div className="single__container container">
        <p className="single__page-text">
          Объявления / Ташкент Недвижимость / Ташкент Квартиры / Ташкент Продажа
          / Новостройки Ташкент
        </p>

        {single.isFetched && !single.isError && single.data.length > 0 ? (
          single.data.map((item) => (
            <div key={item.id}>
              <h2 className="single__title">{item.title}</h2>
              <div className="single__wrap">
                <div className="single__img-wrap">
                  <div className="single__images">
                    <img
                      src={item.image}
                      alt=""
                      className="single__img-small"
                      width={75}
                      height={75}
                    />
                    <img
                      src={item.image}
                      alt=""
                      className="single__img-small"
                      width={75}
                      height={75}
                    />
                    <img
                      src={item.image}
                      alt=""
                      className="single__img-small"
                      width={75}
                      height={75}
                    />
                    <img
                      src={item.image}
                      alt=""
                      className="single__img-small"
                      width={75}
                      height={75}
                    />
                  </div>
                  <img src={item.image} alt="" className="single__img" />
                </div>
                <div className="single__content">
                  <div className="single__content-data">
                    <p className="single__content-data-artikul">
                      Артикул: 4418970
                    </p>
                    <p className="single__content-data-artikul">
                      обновлено: 28.04.17 добавлено: 28.04.17
                    </p>
                  </div>
                  <p className="single__price">{item.price} y.e.</p>
                  <Link className="single__region" to="#">
                    Ташкент, Ташкентская область, Юнусабадский район{" "}
                  </Link>
                  <div className="single__number">
                    <button className="single__number-btn">
                      99891 166 ****{" "}
                      <span className="single__number-btn-span">
                        Покозать польностю
                      </span>
                    </button>
                    <button className="single__number-btn">
                      99891 166 ****{" "}
                      <span className="single__number-btn-span">
                        Покозать польностю
                      </span>
                    </button>
                  </div>
                  <p className="single__aftor">
                    Автор обьявлении:{" "}
                    <strong className="single__aftor-name">
                      Зухриддин Темиров
                    </strong>
                  </p>
                  <div className="single__buttons">
                    <button className="single__buttons-btn1">
                      Написать автору
                    </button>
                    <button className="single__buttons-btn2">
                      Предложить свою цену
                    </button>
                  </div>
                  <p className="single__category">
                    <strong>Category: </strong> {item.category}
                  </p>
                  <div className="single__rating-wrap">
                    <p className="single__rating">
                      <strong>Rating-rate: </strong> {item.rating.rate}
                    </p>
                    <p className="single__count">
                      <strong>Rating-count: </strong> {item.rating.count}
                    </p>
                  </div>
                  <p className="single__desc">{item.description}</p>
                  <div className="single__see">
                    <p className="single__see-num">Просмотры:10958</p>
                    <button className="single__see-text">Пожаловатся</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="single__loading">Loading...</h2>
        )}
        <div className="single__title-wrap">
          <Link to="#" className="single__title-obnovlenie">
            Похожие объявления
          </Link>
          <Link to="#" className="single__title-aftora">
            Обьявление автора
          </Link>
        </div>
        <ul className="top-content__list">
          {product.isFetched && !product.isError && product.data.length > 0 ? (
            product.data.map((item) => (
              <li key={item.id} className="top-content__item">
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
      <FooterSmall />
      <Footer />
    </div>
  );
};
