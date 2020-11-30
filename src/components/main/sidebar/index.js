import Button from '../../common/Button';
import { itemsSideBarList, itemsContentList } from '../../constants/Constants';
import { Card } from '../../main/content/';

const SideBar = () => {
  const sideBar = document.createElement('div');
  sideBar.className = 'sidebar';
  sideBar.setAttribute('id', 'SideBar');
  itemsSideBarList.forEach((item) => {
    const number = document.createElement('div');
    number.className = 'number';
    const button = Button(item);
    button.className += ' btnBar';
    number.appendChild(button);
    button.onclick = () => {
      const content = document.createElement('div');
      content.className = 'content';
      content.setAttribute('id', 'Content');
      if (button.innerText === 'Главная' || button.innerText === 'Все автомобили') {
        itemsContentList.forEach((item) => {
          const card = Card(item);
          content.appendChild(card);
        });
      } else if (button.innerText === 'Легковые автомобили') {
        itemsContentList
          .filter((item) => item.type === 'auto')
          .forEach((item) => {
            const card = Card(item);
            content.appendChild(card);
          });
      } else if (button.innerText === 'Грузовые автомобили') {
        itemsContentList
          .filter((item) => item.type === 'truck')
          .forEach((item) => {
            const card = Card(item);
            content.appendChild(card);
          });
      }
      document.getElementById('Content').remove();
      document.getElementById('Main').appendChild(content);
    };
    sideBar.appendChild(number);
  });
  return sideBar;
};

export default SideBar;
