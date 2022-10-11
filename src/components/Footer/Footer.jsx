import { Link } from "react-router-dom";
import { PokazatIsho } from "../../assets/Images/Icons";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__list">
          <li className="footer__item">
            <h2 className="footer__item-title">Автомобили</h2>
            <Link className="footer__item-link" to="#">
              Легковые авто
            </Link>
            <Link className="footer__item-link" to="#">
              Мото
            </Link>
            <Link className="footer__item-link" to="#">
              Автобусы
            </Link>
            <Link className="footer__item-link" to="#">
              Грузовые авто
            </Link>
            <Link className="footer__item-link" to="#">
              Сельхозтехника
            </Link>
            <Link className="footer__item-link" to="#">
              Запчасти и Аксессуары
            </Link>
            <Link className="footer__item-link" to="#">
              Прицепы и Спецтехника
            </Link>
            <Link className="footer__item-link" to="#">
              Водный и Другой транспортa
            </Link>
          </li>
          <li className="footer__item">
            <h2 className="footer__item-title">Недвижимость</h2>
            <Link className="footer__item-link" to="#">
              Аренда квартир
            </Link>
            <Link className="footer__item-link" to="#">
              Аренда домов
            </Link>
            <Link className="footer__item-link" to="#">
              Аренда гаражей и Стоянок
            </Link>
            <Link className="footer__item-link" to="#">
              Продажа квартир
            </Link>
            <Link className="footer__item-link" to="#">
              Продажа домов
            </Link>
            <Link className="footer__item-link" to="#">
              Продажа земли
            </Link>
            <Link className="footer__item-link" to="#">
              Продажа гаражей/Стоянок
            </Link>
            <Link className="footer__item-link" to="#">
              Аренда помещений
            </Link>
            <Link className="footer__item-link" to="#">
              Продажа помещений
            </Link>
            <Link className="footer__item-link" to="#">
              Прочая недвижимость
            </Link>
            <Link className="footer__item-link" to="#">
              Обмен недвижимости
            </Link>
            <Link className="footer__item-link" to="#">
              Коммерческая недвижимость
            </Link>
          </li>
          <li className="footer__item">
            <h2 className="footer__item-title">Электроника</h2>
            <Link className="footer__item-link" to="#">
              Телефоны
            </Link>
            <Link className="footer__item-link" to="#">
              Компьютеры
            </Link>
            <Link className="footer__item-link" to="#">
              Ноутбуки, планшеты
            </Link>
            <Link className="footer__item-link" to="#">
              Оргтехника и расходники
            </Link>
            <Link className="footer__item-link" to="#">
              ТВ,Фото,Видео и Аудио
            </Link>
            <Link className="footer__item-link" to="#">
              Игры и Приставки
            </Link>
            <Link className="footer__item-link" to="#">
              Техника для дома и Для себя
            </Link>
            <Link className="footer__item-link" to="#">
              Климатическое оборудование
            </Link>
            <Link className="footer__item-link" to="#">
              Аксессуары и Комплектующие
            </Link>
            <Link className="footer__item-link" to="#">
              Техника для наблюдения
            </Link>
            <Link className="footer__item-link" to="#">
              Прочая электроника
            </Link>
          </li>
          <li className="footer__item">
            <h2 className="footer__item-title">Личные вещи</h2>
            <Link className="footer__item-link" to="#">
              Одежда, обувь, аксессуары
            </Link>
            <Link className="footer__item-link" to="#">
              Детская одежда и обувь
            </Link>
            <Link className="footer__item-link" to="#">
              Детские товары и Игрушки
            </Link>
            <Link className="footer__item-link" to="#">
              Школьникам
            </Link>
            <Link className="footer__item-link" to="#">
              Часы и украшения
            </Link>
            <Link className="footer__item-link" to="#">
              Товары для красоты и здоровья
            </Link>
            <Link className="footer__item-link" to="#">
              Разные вещи
            </Link>
          </li>
          <li className="footer__item">
            <h2 className="footer__item-title">Дом и Сад</h2>
            <Link className="footer__item-link" to="#">
              Товары для интерьера
            </Link>
            <Link className="footer__item-link" to="#">
              Товары для сада
            </Link>
            <Link className="footer__item-link" to="#">
              Растения
            </Link>
            <Link className="footer__item-link" to="#">
              Продукты питания
            </Link>
            <Link className="footer__item-link" to="#">
              Посуда и Кухонная утварь
            </Link>
            <Link className="footer__item-link" to="#">
              Хоз.инвентарь и Бытовая химия
            </Link>
            <Link className="footer__item-link" to="#">
              Канцтовары и Расходные{" "}
            </Link>
            <Link className="footer__item-link" to="#">
              Прочие товары для дома
            </Link>
          </li>
          <li className="footer__item">
            <h2 className="footer__item-title">Товары стройки и ремонта</h2>
            <Link className="footer__item-link" to="#">
              Двери и окна
            </Link>
            <Link className="footer__item-link" to="#">
              Сантехника
            </Link>
            <Link className="footer__item-link" to="#">
              Стройматериалы
            </Link>
            <Link className="footer__item-link" to="#">
              Инструменты
            </Link>
          </li>
          <li className="footer__item">
            <h2 className="footer__item-title">Хобби, Отдых и Спорт</h2>
            <Link className="footer__item-link" to="#">
              Антиквариат и Коллекции
            </Link>
            <Link className="footer__item-link" to="#">
              Музыкальные инструменты
            </Link>
            <Link className="footer__item-link" to="#">
              Велосипеды
            </Link>
            <Link className="footer__item-link" to="#">
              Товары для спорта и отдыха
            </Link>
            <Link className="footer__item-link" to="#">
              Книги/Журналы
            </Link>
            <Link className="footer__item-link" to="#">
              CD/DVD/Пластинки/Кассеты
            </Link>
            <Link className="footer__item-link" to="#">
              Билеты и путешествия
            </Link>
            <Link className="footer__item-link" to="#">
              Охота и рыбалка
            </Link>
          </li>
          <li className="footer__item">
            {/* <span className="footer__icon">
              <FooterTitleIcon />
            </span> */}
            <h2 className="footer__item-title"> Бизнес и услуги</h2>
            <Link className="footer__item-link" to="#">
              Сырьё и материалы
            </Link>
            <Link className="footer__item-link" to="#">
              Оборудование и аренда
            </Link>
            <Link className="footer__item-link" to="#">
              Производство и обработка
            </Link>
            <Link className="footer__item-link" to="#">
              Продажа бизнеса и партнерство
            </Link>
            <Link className="footer__item-link" to="#">
              Финансовые услуги/Бухгалтерия
            </Link>
            <Link className="footer__item-link" to="#">
              Услуги для красоты и здоровья
            </Link>
            <Link className="footer__item-link" to="#">
              Услуги курьера и доставки
            </Link>
            <Link className="footer__item-link" to="#">
              Реклама, Полиграфия и Маркетинг
            </Link>
            <Link className="footer__item-link" to="#">
              Няни, Сиделки и Домработницы
            </Link>
            <Link className="footer__item-link" to="#">
              Обучение, курсы и репетиторы
            </Link>
            <Link className="footer__item-link" to="#">
              Фото, видео, искусство и дизайн
            </Link>
            <Link className="footer__item-link" to="#">
              Перевод и Набор текста
            </Link>
            <Link className="footer__item-link" to="#">
              Юридические услуги
            </Link>
            <Link className="footer__item-link" to="#">
              Прокат товаров
            </Link>
            <Link className="footer__item-link" to="#">
              Туризм и спорт
            </Link>
            <Link className="footer__item-link" to="#">
              Праздники и мероприятия
            </Link>
            <Link className="footer__item-link" to="#">
              Перевозки и Аренда авто
            </Link>
            <Link className="footer__item-link" to="#">
              Услуги спецтехники
            </Link>
            <Link className="footer__item-link" to="#">
              Автосервис
            </Link>
            <Link className="footer__item-link" to="#">
              Услуги такси
            </Link>
            <Link className="footer__item-link" to="#">
              Химчистка и стирка
            </Link>
            <Link className="footer__item-link" to="#">
              Пошив одежды и Обуви
            </Link>
            <Link className="footer__item-link" to="#">
              Ювелирные услуги
            </Link>
            <Link className="footer__item-link" to="#">
              Питание и доставка еды
            </Link>
            <Link className="footer__item-link" to="#">
              Уход за животными
            </Link>
            <Link className="footer__item-link" to="#">
              Другие услуги
            </Link>
          </li>
        </ul>
        <button className="footer__btn">
          Покозать еще <PokazatIsho />
        </button>

        <ul className="footer__lists">
          <li className="footer__items">
            <Link className="footer__items-link footer__items-link--green " to="#">
              Подать объявление
            </Link>
          </li>
          <li className="footer__items">
            <Link className="footer__items-link" to="#">
              Объявления
            </Link>
          </li>
          <li className="footer__items">
            <Link className="footer__items-link" to="#">
              Магазины
            </Link>
          </li>
          <li className="footer__items">
            <Link className="footer__items-link" to="#">
              Помощь
            </Link>
          </li>
          <li className="footer__items">
            <Link className="footer__items-link" to="#">
              Безопасность
            </Link>
          </li>
          <li className="footer__items">
            <Link className="footer__items-link" to="#">
              Реклама на сайте
            </Link>
          </li>
          <li className="footer__items">
            <Link className="footer__items-link" to="#">
              О компании
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
