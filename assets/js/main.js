let header = document.getElementsByClassName("header")[0],
  loading = document.getElementsByClassName("loading")[0],
  backToTop = document.getElementsByClassName("back-to-top")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("loaded-opacity");
  }, 1000);
  setTimeout(() => {
    loading.classList.add("loaded-display");
  }, 1500);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    backToTop.classList.add("scrolled-opacity");
  } else {
    backToTop.classList.remove("scrolled-opacity");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
