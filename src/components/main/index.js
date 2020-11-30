import SideBar from '../main/sidebar';
import Content from '../main/content';

const Main = () => {
  const main = document.createElement('div');
  main.className = 'main';
  main.setAttribute('id', 'Main');
  main.appendChild(SideBar());
  main.appendChild(Content());
  return main;
};

export default Main;
