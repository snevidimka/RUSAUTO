import Button from '../../common/Button';
import { itemsLoginList } from '../../constants/Constants';

const Login = (name) => {
  const header = document.createElement('div');
  header.setAttribute('id', 'login');
  if (name) {
    const title = document.createElement('h6');
    title.textContent = name;
    header.appendChild(title);
    return header;
  }
  itemsLoginList.forEach((item) => {
    const button = Button(item);
    header.appendChild(button);
  });
  return header;
};

export default Login;
