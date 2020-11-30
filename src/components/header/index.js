import Logo from '../header/logo';
import Bar from './bar';
import Login from '../header/login';

const Header = () => {
  const header = document.createElement('div');
  header.className = 'header';
  header.setAttribute('id', 'Header');
  header.appendChild(Logo);
  header.appendChild(Bar);
  header.appendChild(Login());
  return header;
};

export default Header;
