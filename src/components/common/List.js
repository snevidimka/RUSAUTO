import BigCard from './BigCard';

const MainList = (list) => {
  const ul = document.createElement('ul');
  ul.className = 'dropdown';
  list.forEach((item) => {
    ul.appendChild(ItemList(item));
  });
  return ul;
};

function ItemList(item) {
  const { titleText } = item;
  const li = document.createElement('li');
  li.className = 'itemList';
  li.textContent = titleText;
  li.onclick = () => handleItemClick(item);
  return li;
}

function handleItemClick(item) {
  const content = document.getElementById('Content');
  while (content.firstChild) {
    content.firstChild.remove();
  }
  const bigCard = BigCard(item);
  content.appendChild(bigCard);
}

export default MainList;
