let button = document.getElementById("button");
let body = document.body;

button.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;

  body.style.backgroundColor = color;
  button.textContent = color;
});
