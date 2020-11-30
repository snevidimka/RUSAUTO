import Button from '../../components/common/Button';

const BigCard = (item) => {
  const { src, titleText, rating, aboutText, price } = item;
  const card = document.createElement('div');
  card.setAttribute('id', 'BigCard');
  card.className = 'BigCard';

  const img = document.createElement('img');
  img.src = src;
  img.style = 'width:100%';

  const heading = document.createElement('h4');
  heading.textContent = titleText;

  const cost = document.createElement('p');
  cost.className = 'price';
  cost.textContent = `${price} руб`;

  const about = document.createElement('p');
  about.textContent = aboutText;

  const buy = document.createElement('div');
  const button = Button({
    label: 'Купить',
    onClick: () => {
      alert('Спасибо за покупку!');
    },
  });
  button.className = `btn general`;
  buy.appendChild(button);

  const elem = stars(rating);
  card.appendChild(img);
  card.appendChild(heading);
  card.appendChild(cost);
  card.appendChild(about);
  card.appendChild(buy);
  card.appendChild(elem);
  return card;
};

function stars(rating) {
  const elem = document.createElement('div');
  for (let i = 0; i < 5; i++) {
    const span = document.createElement('span');
    span.className = i < rating ? 'fa fa-star checked' : 'fa fa-star';
    elem.appendChild(span);
  }
  return elem;
}

export default BigCard;
