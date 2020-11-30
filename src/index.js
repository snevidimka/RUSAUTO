import './assets/styles/index.scss';
import Header from './components/header';
import Slider, { showAutoSlides, showSlides } from './components/slider';
import Main from './components/main';
import Footer from './components/footer';

if (!localStorage.getItem('accounts')) {
  localStorage.setItem('accounts', '[]');
}

const app = document.querySelector('#root');
app.appendChild(Header());
app.appendChild(Slider());
showAutoSlides();
showSlides(1);
app.appendChild(Main());
app.appendChild(Footer());
