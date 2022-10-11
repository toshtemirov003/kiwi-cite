import { useRef } from "react";
import { AddProductImg } from "../../assets/Images/Icons";
import "./shop.css";

export const Shop = () => {
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const checkRef = useRef(null);
  const komnatRef1 = useRef(null);
  const komnatRef2 = useRef(null);
  const komnatRef3 = useRef(null);
  const raspolojenie1 = useRef(null);
  const raspolojenie2 = useRef(null);
  const raspolojenie3 = useRef(null);
  const raspolojenie4 = useRef(null);
  const raspolojenie5 = useRef(null);
  const raspolojenie6 = useRef(null);
  const raspolojenie7 = useRef(null);
  const raspolojenie8 = useRef(null);
  const doma = useRef(null);
  const patalog = useRef(null);
  const uchastka = useRef(null);
  const sostoyanieDoma1 = useRef(null);
  const sostoyanieDoma2 = useRef(null);
  const sostoyanieDoma3 = useRef(null);
  const sostoyanieDoma4 = useRef(null);
  const sostoyanieDoma5 = useRef(null);
  const sostoyanieDoma6 = useRef(null);
  const sostoyanieDoma7 = useRef(null);
  const sostoyanieDoma8 = useRef(null);
  const tipDoma = useRef(null);
  const elektr = useRef(null);
  const otoplenie1 = useRef(null);
  const otoplenie2 = useRef(null);
  const otoplenie3 = useRef(null);
  const otoplenie4 = useRef(null);
  const otoplenie5 = useRef(null);
  const otoplenie6 = useRef(null);
  const otoplenie7 = useRef(null);
  const textArea = useRef(null);
  const region = useRef(null);
  const gorod = useRef(null);
  const number = useRef(null);
  const email = useRef(null);
  const licho = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Цена : ${inputRef.current.value}`);
    console.log(`Сум : ${selectRef.current.value}`);
    console.log(`Договорная : ${checkRef.current.checked}`);
    console.log(
      `Количество комнат* : ${komnatRef1.current.value}, ${komnatRef2.current.value}, ${komnatRef3.current.value}`
    );
    console.log(
      `Расположение* : ${raspolojenie1.current.checked}, ${raspolojenie2.current.checked}, ${raspolojenie3.current.checked}, ${raspolojenie4.current.checked}, ${raspolojenie5.current.checked}, ${raspolojenie6.current.checked}, ${raspolojenie7.current.checked}, ${raspolojenie8.current.checked}`
    );
    console.log(`Этажность дома* : ${doma.current.value}`);
    console.log(`Высота потолков : ${patalog.current.value}`);
    console.log(`Площадь участка* : ${uchastka.current.value}`);
    console.log(
      `Состояние дома* : ${sostoyanieDoma1.current.checked}, ${sostoyanieDoma2.current.checked}, ${sostoyanieDoma3.current.checked}, ${sostoyanieDoma4.current.checked}, ${sostoyanieDoma5.current.checked}, ${sostoyanieDoma6.current.checked}, ${sostoyanieDoma7.current.checked}, ${sostoyanieDoma8.current.checked}`
    );
    console.log(`Тип дома: ${tipDoma.current.value}`);
    console.log(`Электричество : ${elektr.current.value}`);
    console.log(
      `Отопление* : ${otoplenie1.current.checked}, ${otoplenie2.current.checked}, ${otoplenie3.current.checked}, ${otoplenie4.current.checked}, ${otoplenie5.current.checked}, ${otoplenie6.current.checked}, ${otoplenie7.current.checked}`
    );
    console.log(`Есть возможность подключения* : ${textArea.current.value}`);
    console.log(
      `Местоположение объекта: ${region.current.value}, ${gorod.current.value}`
    );
    console.log(`Телефонный номер : ${number.current.value}`);
    console.log(`Email-адрес : ${email.current.value}`);
    console.log(`Контактный лицо : ${licho.current.value}`);
  };

  return (
    <div className="add container">
      <form className="add__form" onSubmit={handleSubmit}>
        <div className="add__form-wrapper">
          <div className="add__label-wrap">
            <label className="add__label-price" htmlFor="price">
              Цена
            </label>
            <input
              ref={inputRef}
              className="add__label-price-inp"
              type="text"
              id="price"
              placeholder="400 000"
            />
          </div>

          <select ref={selectRef} className="add__select-sum">
            <option value="sum">Сум</option>
            <option value="dollar">Dollar</option>
            <option value="rubl">Rubl</option>
          </select>

          <input
            ref={checkRef}
            className="add__checkbox"
            type="checkbox"
            name=""
            id="aa"
          />
          <label className="add__checkbox-labell" htmlFor="aa">
            Договорнаяx
          </label>
        </div>

        <div className="add__form-wrapper">
          <div className="add__label-wrap">
            <label className="add__label-price" htmlFor="">
              Количество комнат*
            </label>
            <input
              ref={komnatRef1}
              className="add__label-price-inp"
              type="number"
              id=""
              placeholder="4"
            />
          </div>
          <input
            ref={komnatRef2}
            className="add__input-komnate"
            type="number"
            id=""
            placeholder="900"
          />
          <input
            ref={komnatRef3}
            className="add__input-komnate"
            type="number"
            id=""
            placeholder="90"
          />
        </div>

        <strong className="add__form-address-title">Расположение*</strong>
        <div className="add__form-address">
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie1}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="1"
              />
              <label className="add__checkbox-label" htmlFor="1">
                В городе
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie2}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="2"
              />
              <label className="add__checkbox-label" htmlFor="2">
                В пригороде
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie3}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="3"
              />
              <label className="add__checkbox-label" htmlFor="3">
                В сельской местности
              </label>
            </div>
          </div>
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie4}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="4"
              />
              <label className="add__checkbox-label" htmlFor="4">
                Вдоль трассы
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie5}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="5"
              />
              <label className="add__checkbox-label" htmlFor="5">
                Возле водоема, реки
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie6}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="6"
              />
              <label className="add__checkbox-label" htmlFor="6">
                В предгорьях
              </label>
            </div>
          </div>
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie7}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="7"
              />
              <label className="add__checkbox-label" htmlFor="7">
                В дачном массиве
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={raspolojenie8}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="8"
              />
              <label className="add__checkbox-label" htmlFor="8">
                На закрытой территории
              </label>
            </div>
          </div>
        </div>

        <div className="add__form-wrapper">
          <div className="add__label-wrap">
            <label className="add__label-price" htmlFor="doma">
              Этажность дома*
            </label>
            <input
              ref={doma}
              className="add__label-price-inp"
              type="number"
              id="doma"
              placeholder="4"
            />
          </div>
          <div className="add__label-wrap">
            <label className="add__label-price" htmlFor="patalog">
              Высота потолков
            </label>
            <input
              ref={patalog}
              className="add__label-price-inp"
              type="number"
              id="patalog"
              placeholder="2m"
            />
          </div>
          <div className="add__label-wrap">
            <label className="add__label-price" htmlFor="uchastka">
              Площадь участка*
            </label>
            <input
              ref={uchastka}
              className="add__label-price-inp"
              type="number"
              id="uchastka"
              placeholder="342"
            />
          </div>
        </div>

        <strong className="add__form-address-title">Состояние дома*</strong>
        <div className="add__form-address">
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma1}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="11"
              />
              <label className="add__checkbox-label" htmlFor="11">
                Авторский проект
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma2}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="12"
              />
              <label className="add__checkbox-label" htmlFor="12">
                Средний ремонт
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma3}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="13"
              />
              <label className="add__checkbox-label" htmlFor="13">
                Евроремонт
              </label>
            </div>
          </div>
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma4}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="14"
              />
              <label className="add__checkbox-label" htmlFor="14">
                Требует ремонта
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma5}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="15"
              />
              <label className="add__checkbox-label" htmlFor="15">
                Предчистовая отделка
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma6}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="16"
              />
              <label className="add__checkbox-label" htmlFor="16">
                Не достроен
              </label>
            </div>
          </div>
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma7}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="17"
              />
              <label className="add__checkbox-label" htmlFor="17">
                Черновая отделка
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={sostoyanieDoma8}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="18"
              />
              <label className="add__checkbox-label" htmlFor="18">
                Под снос
              </label>
            </div>
          </div>
        </div>

        <div className="add__form-selects">
          <div className="add__form-selects-wrap">
            <label htmlFor="kotedj" className="add__form-selects-label">
              Тип дома
            </label>
            <select
              ref={tipDoma}
              className="add__form-selects-select add__form-selects-select--width"
              id="kotedj"
            >
              <option value="Коттедж">Коттедж</option>
              <option value="Коттедж1">Коттедж1</option>
              <option value="Коттедж2">Коттедж2</option>
            </select>
          </div>
          <div className="add__form-selects-wrap">
            <label htmlFor="podklyuchenie" className="add__form-selects-label">
              Электричество
            </label>
            <select
              ref={elektr}
              className="add__form-selects-select"
              id="podklyuchenie"
            >
              <option value="Есть возможность подключения">
                Есть возможность подключения
              </option>
              <option value="Есть возможность подключения1">
                Есть возможность подключения1
              </option>
              <option value="Есть возможность подключения2">
                Есть возможность подключения2
              </option>
            </select>
          </div>
        </div>

        <strong className="add__form-address-title">Отопление*</strong>
        <div className="add__form-address">
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={otoplenie1}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="21"
              />
              <label className="add__checkbox-label" htmlFor="21">
                Центральное
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={otoplenie2}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="22"
              />
              <label className="add__checkbox-label" htmlFor="22">
                На газе
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={otoplenie3}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="23"
              />
              <label className="add__checkbox-label" htmlFor="23">
                На твердом топливе
              </label>
            </div>
          </div>
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={otoplenie4}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="24"
              />
              <label className="add__checkbox-label" htmlFor="24">
                На жидком топлив
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={otoplenie5}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="25"
              />
              <label className="add__checkbox-label" htmlFor="25">
                Электрическое
              </label>
            </div>
            <div className="add__form-check-wrap">
              <input
                ref={otoplenie6}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="26"
              />
              <label className="add__checkbox-label" htmlFor="26">
                Не достроенСмешанное
              </label>
            </div>
          </div>
          <div className="add__form-address-box">
            <div className="add__form-check-wrap">
              <input
                ref={otoplenie7}
                className="add__checkbox"
                type="checkbox"
                name=""
                id="27"
              />
              <label className="add__checkbox-label" htmlFor="27">
                Без отопления
              </label>
            </div>
          </div>
        </div>

        <strong className="add__form-address-title add__form-address-title--area">
          Есть возможность подключения*
        </strong>
        <textarea ref={textArea} className="add__form-textarea"></textarea>
        <span className="add__form-textarea-text">9000 знаков осталос</span>

        <div className="add__form-images">
          <AddProductImg />
          <AddProductImg />
          <AddProductImg />
          <AddProductImg />
        </div>
        <div className="add__form-images">
          <AddProductImg />
          <AddProductImg />
          <AddProductImg />
          <AddProductImg />
        </div>

        <strong className="add__form-address-title-2">
          Местоположение объекта
        </strong>
        <div className="add__form-selects">
          <div className="add__form-selects-wrap">
            <label htmlFor="region" className="add__form-selects-label">
              Регион
            </label>
            <select
              ref={region}
              className="add__form-selects-select add__form-selects-select--width"
              id="region"
            >
              <option value="Ташкент">Ташкент</option>
              <option value="Самарканд">Самарканд</option>
              <option value="Фергана">Фергана</option>
            </select>
          </div>
          <div className="add__form-selects-wrap">
            <label htmlFor="gorod" className="add__form-selects-label">
              Город / Район
            </label>
            <select ref={gorod} className="add__form-selects-select" id="gorod">
              <option value="Мирза Улугбекский район">
                Мирза Улугбекский район
              </option>
              <option value="Юнусабадский район">Юнусабадский район</option>
              <option value="Чиланзарский район">Чиланзарский район</option>
            </select>
          </div>
        </div>

        <iframe
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47931.95421974496!2d69.31085349657481!3d41.33611154268863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4431777da7b%3A0x289db26806f061e!2z0JzQuNGA0LfQvi3Qo9C70YPQs9Cx0LXQutGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1665221290152!5m2!1sru!2s"
          width="653"
          height="376"
          loading="lazy"
        ></iframe>

        <div className="add__form-inputs">
          <div className="add__form-input">
            <label className="add__form-input-number" htmlFor="phoneNumber">
              Телефонный номер
            </label>
            <input
              ref={number}
              className="add__form-inp"
              type="number"
              id="phoneNumber"
              placeholder="+99894 888 74452"
            />
          </div>
          <div className="add__form-input">
            <label className="add__form-input-number" htmlFor="email">
              Email-адрес
            </label>
            <input
              ref={email}
              className="add__form-inp"
              type="email"
              id="email"
              placeholder="+99894 888 74452"
            />
          </div>
          <div className="add__form-input">
            <label className="add__form-input-number" htmlFor="phoneNumber">
              Контактный лицо
            </label>
            <input
              ref={licho}
              className="add__form-inp"
              type="text"
              id="phoneNumber"
              placeholder="Зухриддин"
            />
          </div>
        </div>

        <button className="add__form-btn" type="">
          Добавить обьявления бесплатно
        </button>
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="add__form-link"
        >
          Предпросмотр
        </button>
      </form>
    </div>
  );
};
