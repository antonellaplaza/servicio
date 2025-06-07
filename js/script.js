
// Botón para volver arriba
const btnArriba = document.getElementById("btn-arriba");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
};

btnArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

