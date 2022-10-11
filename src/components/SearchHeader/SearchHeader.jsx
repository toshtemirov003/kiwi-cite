import "./searchHeader.css";
import { Location, SearchIcon } from "../../assets/Images/Icons";

export const SearchHeader = () => {
  return (
    <div className="search">
      <div className="search__wrap">
        <div className="search__icon">
          <SearchIcon />
        </div>
        <input
          className="search__input"
          type="search"
          placeholder="Введите название обявления или выберите из списка"
        />
      </div>
      <button className="search__btn search__btn-1">Интерсное</button>
      <button className="search__btn search__btn-2">Топ</button>
      <button className="search__btn search__btn-3">
        Отличные предложение
      </button>
      <button className="search__btn search__btn-4">Супер цена</button>
      <button className="search__btn search__btn-location">
        г.Ташкент <Location />
      </button>
      <button className="search__btn search__btn-location">
        г.Термез <Location />
      </button>
      <button className="search__btn search__btn-location">
        г.Самарканд <Location />
      </button>

      <div className="select">
        <strong className="select__title">Вы сейчас в рубрике</strong>
        <div className="rubrika-wrap">
          <span className="rubrika__item">
            Электроника <button className="rubrika__item-btn">X</button>
          </span>
          <span className="rubrika__item">
            Мониторы <button className="rubrika__item-btn">X</button>
          </span>
          <button className="rubrika__btn">
            <svg
              width="18"
              height="9"
              viewBox="0 0 18 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1804_4517"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="9"
              >
                <path d="M0.5 8.5L0.5 0.5L17.5 0.5V8.5L0.5 8.5Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1804_4517)">
                <path
                  d="M8.99954 7.4633L1.32209 0.626175C1.13318 0.457941 0.830492 0.457941 0.641582 0.626175C0.452806 0.79425 0.452806 1.06397 0.641582 1.23205L8.66122 8.37391C8.84995 8.54203 9.15282 8.54203 9.34155 8.37391L17.3575 1.23205C17.4503 1.14963 17.5 1.03855 17.5 0.930756C17.5 0.822923 17.4537 0.711839 17.3575 0.629269C17.1688 0.461194 16.8659 0.461194 16.6772 0.629269L8.99954 7.4633Z"
                  fill="black"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="search__select-wrap">
        <div className="selects__wrap">
          <select className="search__select-state">
            <option value="Состояние">Состояние</option>
            <option value="Состояние">Состояние1</option>
            <option value="Состояние">Состояние2</option>
          </select>

          <select className="search__select-tip">
            <option value="Тип">Тип объявщика</option>
            <option value="Тип">Тип объявщика1</option>
            <option value="Тип">Тип объявщика2</option>
          </select>

          <select className="search__select-rayon">
            <option value="район">Ташкент - Мирза улугбекский район</option>
            <option value="район">Ташкент - Мирза улугбекский район1</option>
            <option value="район">Ташкент - Мирза улугбекский район2</option>
          </select>
        </div>

        <button className="search__select-btn">Применить</button>
      </div>
    </div>
  );
};
