const form = document.querySelector("#convertir-form");
const input = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(input.value);
  div.innerHTML = "<p>" + convertirARomano(number) + "</p>";
});