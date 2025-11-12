const refs = {
  container: document.querySelector('.widget'),
  color: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btn.addEventListener('click', () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = `${refs.body.style.backgroundColor}`;
});
