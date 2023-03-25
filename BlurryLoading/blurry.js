const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;
// let bgb=0;
let int = setInterval(blurring, 40);
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  // console.log(load);
  loadText.innerHTML = `${load}%`;
  let opac = load / 100;
  loadText.style.opacity = opac;
  const blur = load + 100 - load * 2;

  console.log((bg.style.filter = `blur(${blur}px)`));
}
