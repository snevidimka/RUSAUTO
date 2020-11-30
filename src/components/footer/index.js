import Button from '../../../src/components/common/Button';
import { itemsFooterList } from '../constants/Constants';

const Footer = () => {
  const footer = document.createElement('div');
  footer.setAttribute('id', 'Footer');

  itemsFooterList.forEach((item) => {
    const button = Button(item);
    button.onclick = item.onClick;

    footer.appendChild(button);
    footer.className = 'footer';
  });
  return footer;
};

export default Footer;
