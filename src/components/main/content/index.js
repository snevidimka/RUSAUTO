import BigCard from '../../common/BigCard';
import { itemsContentList } from '../../constants/Constants';

export const Card = (item) => {
  const { src, titleText, rating, type } = item;
  const card = document.createElement('div');
  card.className = 'card';
  card.title = type;
  card.onclick = () => {
    const bigCard = BigCard(item);
    document.getElementById('Content').remove();
    const content = document.createElement('div');
    content.className = 'content';
    content.setAttribute('id', 'Content');
    content.appendChild(bigCard);
    document.getElementById('Main').appendChild(content);
  };

  const img = document.createElement('img');
  img.src = src;
  img.style = 'width:100%';

  const heading = document.createElement('h4');
  heading.textContent = titleText;
  heading.className = 'h4';

  card.appendChild(img);
  card.appendChild(heading);
  return card;
};

const Content = () => {
  const content = document.createElement('div');
  content.className = 'content';
  content.className = 'content';
  content.setAttribute('id', 'Content');
  itemsContentList.forEach(function(item) {
    const number = Card(item);
    content.appendChild(number);
  });
  return content;
};

export default Content;
