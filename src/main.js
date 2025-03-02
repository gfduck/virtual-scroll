import "./style.css";
import VirtualScrollHandler from "virtual-scroll-handler";

const scroller = new VirtualScrollHandler({
  range: [0, 2000], // Rango total del desplazamiento
  startY: 0, // Posición inicial
});
(function loop() {
  requestAnimationFrame(loop);
  scroller.update();
  console.log(scroller.completion);
})();

// Añadir listener para depurar eventos
const scrollbar = document.querySelector(".vsh-scrollbar");
if (scrollbar) {
  scrollbar.addEventListener("mousedown", (e) => {
    console.log("Mouse down en la barra", e);
  });
} else {
  console.error("La barra de desplazamiento no se encontró en el DOM");
}
