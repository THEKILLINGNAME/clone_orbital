let text = document.getElementsByClassName("text")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY < 80) {
    text.style["opacity"] = "1";
  }
  if (window.scrollY > 80) {
    text.style["opacity"] = "0.8";
  }
  if (window.scrollY > 160) {
    text.style["opacity"] = "0.6";
  }
  if (window.scrollY > 240) {
    text.style["opacity"] = "0.4";
  }
  if (window.scrollY > 320) {
    text.style["opacity"] = "0.2";
  }
  if (window.scrollY > 400) {
    text.style["opacity"] = "0";
  }
});
