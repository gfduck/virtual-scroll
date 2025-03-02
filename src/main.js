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
