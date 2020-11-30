import { itemsSliderList } from '../constants/Constants';

const Slide = (params) => {
  const { src, className = '' } = params;
  const slide = document.createElement('div');
  slide.className = `mySlides fade`;

  const number = document.createElement('div');

  const img = document.createElement('img');
  img.src = src;
  img.className = 'imgSlide';

  slide.append(number);
  slide.append(img);
  return slide;
};

const Slider = () => {
  const slider = document.createElement('div');
  slider.className = 'slideshow-container';
  slider.setAttribute('id', 'Slider');
  itemsSliderList.forEach((item, index) => {
    const numberText = `${index + 1} / ${itemsSliderList.length}`;
    const slide = Slide({ ...item, numberText });
    slider.appendChild(slide);
  });
  const arrowLeft = document.createElement('a');
  arrowLeft.className = 'prev';
  arrowLeft.innerHTML = '&#10094;';
  arrowLeft.onclick = () => plusSlides(-1);
  slider.appendChild(arrowLeft);

  const arrowRight = document.createElement('a');
  arrowRight.className = 'next';
  arrowRight.innerHTML = '&#10095;';
  arrowRight.onclick = () => plusSlides(1);
  slider.appendChild(arrowRight);
  return slider;
};

let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

export function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

export function showAutoSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showAutoSlides, 2000);
}

export default Slider;
