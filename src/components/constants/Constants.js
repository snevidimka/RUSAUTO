import gaz_vepr from '../../../src/assets/images/gaz-vepr.jpg';
import kamaz from '../../../src/assets/images/kamaz.jpg';
import lada_granta from '../../../src/assets/images/lada-granta.jpg';
import lada_kalina from '../../../src/assets/images/lada-kalina.jpg';
import lada_priora from '../../../src/assets/images/lada-priora.jpg';
import lada_vesta from '../../../src/assets/images/lada-vesta.jpg';
import uaz_profi from '../../../src/assets/images/uaz-profi.jpg';
import ural_next from '../../../src/assets/images/ural-next.jpg';
import Auto1 from '../../../src/assets/images/auto1.jpg';
import Auto2 from '../../../src/assets/images/auto2.jpg';
import Auto3 from '../../../src/assets/images/auto3.jpg';
import Auto4 from '../../../src/assets/images/auto4.jpg';
import Trucks1 from '../../../src/assets/images/trucks1.jpg';
import Trucks2 from '../../../src/assets/images/trucks2.jpg';
import Trucks3 from '../../../src/assets/images/trucks3.jpg';
import Trucks4 from '../../../src/assets/images/trucks4.jpg';
import { renderModal } from '../common/Modal';
import CheckIn from '../forms/CheckIn';
import Login from '../forms/Login';

export const itemsBarList = [
  {
    label: 'Главная',
    className: 'general',
    onClick: () => {},
    type: 'all',
  },
  {
    label: 'Легковые автомобили',
    className: 'auto',
    onClick: () => {},
    type: 'auto',
  },
  {
    label: 'Грузовые автомобили',
    className: 'auto',
    onClick: () => {},
    type: 'truck',
  },
];

export const itemsLoginList = [
  {
    label: 'Регистрация',
    className: 'check-in',
    onClick: () => {
      renderModal(CheckIn());
    },
  },
  {
    label: 'Вход',
    className: 'login',
    onClick: () => {
      renderModal(Login());
    },
  },
];

export const itemsSliderList = [
  {
    src: Auto1,
    className: 'mySlides',
  },
  {
    src: Auto2,
    className: 'mySlides',
  },
  {
    src: Auto3,
    className: 'mySlides',
  },
  {
    src: Auto4,
    className: 'mySlides',
  },
  {
    src: Trucks1,
    className: 'mySlides',
  },
  {
    src: Trucks2,
    className: 'mySlides',
  },
  {
    src: Trucks3,
    className: 'mySlides',
  },
  {
    src: Trucks4,
    className: 'mySlides',
  },
];

export const itemsSideBarList = [
  {
    label: 'Главная',
    className: 'general',
    onClick: () => {},
    type: 'all',
  },
  {
    label: 'Легковые автомобили',
    className: 'auto',
    onClick: () => {},
    type: 'auto',
  },
  {
    label: 'Грузовые автомобили',
    className: 'auto',
    onClick: () => {},
    type: 'trucks',
  },
  {
    label: 'Все автомобили',
    className: 'auto',
    onClick: () => {},
    type: 'all',
  },
];

export const itemsContentList = [
  {
    src: lada_vesta,
    titleText: 'Лада-Веста',
    rating: 5,
    aboutText: `Lada Vesta – это «небольшой семейный автомобиль»,
    доступный в двух вариантах: седан и пятидверный универсал.`,
    price: '750 000',
    type: 'auto',
  },
  {
    src: lada_granta,
    titleText: 'Лада-Гранта',
    rating: 3,
    aboutText: `Lada Granta представляет собой «недорогой» автомобиль «субкомпактной категории»`,
    price: '500 000',
    type: 'auto',
  },
  {
    src: lada_kalina,
    titleText: 'Лада-Калина',
    rating: 1,
    aboutText: `Lada Kalina представляет собой автомобиль «малого класса II группы»`,
    price: '450 000',
    type: 'auto',
  },
  {
    src: lada_priora,
    titleText: 'Лада-Приора',
    rating: 2,
    aboutText: `Lada Priora представляет собой семейство бюджетных 
    автомобилей «малого класса III группы»`,
    price: '550 000',
    type: 'auto',
  },
  {
    src: gaz_vepr,
    titleText: 'ГАЗ-Вепрь',
    rating: 4,
    aboutText: `Вепрь Next – внедорожный грузовик-пикап с колесной формулой «4×4», 
      предназначенный для работы в охотничьих и лесных хозяйствах`,
    price: '2 900 000',
    type: 'truck',
  },
  {
    src: kamaz,
    titleText: 'Камаз',
    rating: 1,
    aboutText: `КамАЗ-43253 – двухосный грузовой автомобиль-тягач 
    с колесной формулой «4×2» и максимальной грузоподъёмностью 9800 кг`,
    price: '4 900 000',
    type: 'truck',
  },
  {
    src: uaz_profi,
    titleText: 'УАЗ-Профи',
    rating: 2,
    aboutText: `УАЗ Профи – задне- или полноприводный представитель сегмента легких 
    коммерческих автомобилей грузоподъемностью 1.5 тонны`,
    price: '1 000 000',
    type: 'truck',
  },
  {
    src: ural_next,
    titleText: 'Урал-Некст',
    rating: 5,
    aboutText: `Урал-Next – семейство крупнотоннажный грузовых автомобилей 
      повышенной проходимости с капотной компоновкой и колесной формулой «6×6» или «4×4»`,
    price: '4 500 000',
    type: 'truck',
  },
];

export const itemsFooterList = [
  {
    label: 'АвтоНовости',
    className: 'general',
    onClick: () => {
      window.open('https://yandex.ru/news/rubric/auto');
    },
  },
  {
    label: 'ПолезныеСоветы',
    className: 'general',
    onClick: () => {
      window.open('https://mag.auto.ru/article/officialdealerp1/');
    },
  },
  {
    label: 'МирАвто',
    className: 'general',
    onClick: () => {
      window.open('https://www.collectionworld.ru/');
    },
  },
  {
    label: 'ПДД',
    className: 'general',
    onClick: () => {
      window.open('http://www.pdd24.com/');
    },
  },
];
