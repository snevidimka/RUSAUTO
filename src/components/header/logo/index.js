import LOGO from '../../../assets/images/LOGO.jpg';

const Logo = () => {
  const header = document.createElement('div');
  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = LOGO;
  header.appendChild(logo);
  return header;
};

export default Logo();
