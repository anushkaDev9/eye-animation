const eye = document.querySelector(".eye-ball");
window.addEventListener("mousemove", (event) => {
  const x = -(window.innerWidth / 2 - event.pageX) / 35;
  const y = -(window.innerHeight / 2 - event.pageY) / 35;
  eye.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;
});
const eyes = document.querySelector(".eye-ball1");
window.addEventListener("mousemove", (event) => {
  const x = -(window.innerWidth / 2 - event.pageX) / 35;
  const y = -(window.innerHeight / 2 - event.pageY) / 35;
  eyes.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;
});