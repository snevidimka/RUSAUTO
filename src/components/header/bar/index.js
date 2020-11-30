import Button from '../../common/Button';
import { itemsBarList, itemsContentList } from '../../constants/Constants';
import { Card } from '../../main/content';
import List from '../../common/List';

const Bar = () => {
  const header = document.createElement('div');
  header.setAttribute('id', 'Bar');
  header.style = `display: flex; flex-wrap: wrap;`;
  itemsBarList.forEach((item) => {
    const wrap = document.createElement('div');
    wrap.style = 'position: relative;';
    if (item.type !== 'all') {
      const filteredList = itemsContentList.filter((elem) => {
        return item.type === elem.type;
      });
      wrap.appendChild(List(filteredList));
    }

    const button = Button(item);
    wrap.className += ' mainButton';

    wrap.appendChild(button);
    header.appendChild(wrap);
    button.onclick = () => {
      const content = document.createElement('div');
      content.className = 'content';
      content.setAttribute('id', 'Content');
      if (button.innerText === 'Главная') {
        itemsContentList.forEach((item) => {
          const card = Card(item);
          content.appendChild(card);
        });
        document.getElementById('Content').remove();
        document.getElementById('Main').appendChild(content);
      } else if (button.innerText === 'Легковые автомобили') {
      }
    };
  });
  return header;
};

export default Bar();
