const images = [
  'https://picsum.photos/id/237/600/400',
  'https://picsum.photos/id/76/600/400',
  'https://picsum.photos/id/83/600/400',
  'https://picsum.photos/id/368/600/400',
  'https://picsum.photos/id/292/600/400',
];

const bodyImg = document.querySelector('.body__img');
const bodyPreview = document.querySelector('.body__preview');
const arrowLeft = document.querySelector('.body__arrow--left');
const arrowRight = document.querySelector('.body__arrow--right');

const image = () => document.createElement('img');
const findImgPosition = () => images.findIndex(img => img === currentBodyImg.src);

const currentBodyImg = image();
currentBodyImg.src = images[0];
bodyImg.appendChild(currentBodyImg);

images.forEach(el => {
  const bodyPreviewImg = image();
  bodyPreviewImg.src = el;
  bodyPreview.appendChild(bodyPreviewImg);

  if (currentBodyImg.src === el) {
    bodyPreviewImg.className = 'body__smallImgActive';
  }

  bodyPreviewImg.addEventListener('click', () => {
    currentBodyImg.src = el;
    addClass();
  });
});

arrowLeft.addEventListener('click', () => {
  const currentPosition = findImgPosition();
  if (currentPosition > 0) {
    currentBodyImg.src = images[currentPosition - 1];
  } else {
    currentBodyImg.src = images[images.length - 1];
  }
  addClass();
});

arrowRight.addEventListener('click', () => {
  const currentPosition = findImgPosition();
  if (currentPosition < images.length - 1) {
    currentBodyImg.src = images[currentPosition + 1];
  } else {
    currentBodyImg.src = images[0];
  }
  addClass();
});

function addClass() {
  const bodyPreviewAll = document.querySelectorAll('.body__preview img');

  bodyPreviewAll.forEach(image => {
    image.className = '';
  });

  bodyPreviewAll.forEach(image => {
    if (currentBodyImg.src === image.src) {
      image.className = 'body__smallImgActive';
    }
  });
}
