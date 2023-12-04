// Раскрытие меню по клику на бургер

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu__nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("burger--clicked");
  document.body.classList.toggle("stop-scroll");
});

// Переход по ссылкам в меню

let navList = document.querySelector(".menu__list");

navList.addEventListener("click", function () {
  burger.classList.remove("burger--active");
  menu.classList.remove("burger--clicked");
  document.body.classList.remove("stop-scroll");
});

// Убираем возможность выбрать с клавиатуры кнопку лупы при достижении ширины окна XXL (1600 px)

let btnSearch = document.querySelector(".btn-search");

function checkWindowSize() {
  let windowWidth = window.innerWidth;
  let maxWidth = 1599;

  if (windowWidth > maxWidth) {
    btnSearch.setAttribute("tabindex", "-1");
  } else {
    btnSearch.removeAttribute("tabindex");
  }
}

window.addEventListener("resize", checkWindowSize);

checkWindowSize();

// Раскрытие формы поиска по клику на кнопку лупы

let searchButton = document.querySelector(".btn-search");
let headerContainer = document.querySelector(".header");
let searchButtonClose = document.querySelector(".btn-cross");

searchButton.addEventListener("click", function () {
  headerContainer.classList.add("search--clicked");
  btnSearch.setAttribute("tabindex", "-1");
});
searchButtonClose.addEventListener("click", function () {
  headerContainer.classList.remove("search--clicked");
  btnSearch.removeAttribute("tabindex");
});

// Нажатие клавиши Энтер на ссылку в подменю с клавиатуры

document.addEventListener("DOMContentLoaded", function () {
  let menuList = document.querySelectorAll(".submenu__nav");

  menuList.forEach(function (menuList2) {
    menuList2.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        // Закрываем все другие меню
        menuList.forEach(function (otherMenu) {
          if (otherMenu !== menuList2) {
            otherMenu.classList.remove("navbutton--clicked");
          }
        });

        // Открываем или закрываем текущее меню
        menuList2.classList.toggle("navbutton--clicked");

        // Снимаем фокус
        menuList2.blur();
      }
    });
  });
});

// Клик по ссылке в подменю и раскрытие дополнительного поля с карточками стилей

function changeClass(clickedButton) {
  let menuItem = clickedButton.closest(".submenu__nav");

  if (menuItem.classList.contains("navbutton--clicked")) {
    menuItem.classList.remove("navbutton--clicked");
  } else {
    let menuItems = document.querySelectorAll(".submenu__nav");
    menuItems.forEach(function (item) {
      item.classList.remove("navbutton--clicked");
    });
    menuItem.classList.add("navbutton--clicked");
  }
}

// Нажатие клавиши Энтер по кнопке с именем художника в подменю и переход в раздел Каталог

let navItemThirdElements = document.querySelectorAll(".art__item");

// Добавляем обработчик события keydown для каждого элемента
navItemThirdElements.forEach(function (element) {
  element.addEventListener("keydown", function (event) {
    // Проверяем, является ли нажатая клавиша клавишей "Enter" (код клавиши 13)
    if (event.key === "Enter") {
      // Выполняем переход по якорю
      window.location.href = "#Каталог";
    }
  });
});

// Галерея - селект - нажатие с клавиатуры

document.querySelectorAll(".gallery__form-checkbox").forEach(function (label) {
  label.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      // Если нажата клавиша "Enter", то изменяем состояние связанного с меткой чекбокса
      var checkbox = label.querySelector(
        'input[type="gallery__form-checkbox"]'
      );
      checkbox.checked = !checkbox.checked;
    }
  });
});

// Свайпер № 1 (Галерея)

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    701: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
  },
});

// Свайпер № 2 (События)

const swiper_2 = new Swiper(".swiper-2", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-2-pagination",
    type: "bullets",
    bulletActiveClass: "swiper-pagination-bullet-active",
    clickable: "true",
  },
  scrollbar: {
    hide: true,
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});

// Свайпер № 3

const swiper_3 = new Swiper(".swiper-3", {
  speed: 400,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-3-button-next",
    prevEl: ".swiper-3-button-prev",
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 35,
    },

    1000: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// Селект

const element = document.querySelector(".gallery__form-select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
});

// Аккордеон

new Accordion(".accordion-container");

// Каталог

// Назначаем переменную для всех кнопок
let galleryTabsBtn = document.querySelectorAll(".catalog__btn");

// Назначаем переменную для всех табов
let galleryTabsItem = document.querySelectorAll(".catalog__painter");

// Для каждой из кнопок запускаем функцию с параметром "element"
galleryTabsBtn.forEach(function (element) {
  // Вешаем прослушку на клик, по которому будет выполняться функция "e"
  element.addEventListener("click", function (e) {
    // Определяем константу path, которая равна месту в дереве, где произошел клик
    const path = e.currentTarget.dataset.path;

    // Для каждой кнопки запускаем функцию с параметром "btn"
    galleryTabsBtn.forEach(function (btnElement) {
      // Удаляем у каждой кнопки стиль ...--active
      btnElement.classList.remove("catalog__btn--active");
    });

    // Добавляем к кликнутой кнопке стиль ...--active
    e.currentTarget.classList.add("catalog__btn--active");

    // Запускаем функцию для каждого таба с параметром "element"
    galleryTabsItem.forEach(function (element) {
      // Убираем у каждого таба стиль "tabs-item--active"
      element.classList.remove("catalog__painter_active");
    });

    //     Добавляем к табу, чей data-target тождественен константе path, класс "tabs-item--active"
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog__painter_active");
  });
});

// Форма

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask("+7 (999) 999-99-99");
  inputMask.mask(telSelector);

  const validation = new JustValidate(".form");

  validation
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Имя обязательно",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Слишком короткое имя",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Слишком длинное имя",
      },
    ])

    .addField("#phone", [
      {
        rule: "required",
        errorMessage: "Номер телефона обязателен",
      },

      {
        rule: "function",
        validator: function () {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: "Неправильный номер телефона",
      },
    ]);
});

// Карта

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758468, 37.601088],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
  });

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [11.758468, 37.601088], // координаты точки
    },
  });

  var myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./img/placemark.svg",
      iconImageSize: [28, 40],
      iconImageOffset: [-3, -42],
    }
  );

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove("geolocationControl"); // удаляем геолокацию
  myMap.controls.remove("searchControl"); // удаляем поиск
  myMap.controls.remove("trafficControl"); // удаляем контроль трафика
  myMap.controls.remove("typeSelector"); // удаляем тип
  myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
  myMap.controls.remove("rulerControl"); // удаляем контрол правил
  myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}
