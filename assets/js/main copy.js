const toggleMenu = document.querySelector(".btn-toggle-menu");
toggleMenu.addEventListener("click", () => {
  document.querySelector(".layout-sidenav").classList.toggle("sidenav-toggled");
});

function toggleResize() {
  if (window.innerWidth <= 768) {
    document.querySelector(".layout-sidenav").classList.add("sidenav-toggled");
  } else if (window.innerWidth >= 992) {
    document
      .querySelector(".layout-sidenav")
      .classList.remove("sidenav-toggled");
  }
}

toggleResize();
onresize = (event) => {
  toggleResize();
};

document.querySelector("#btnFullscreen").addEventListener(
  "click",
  function (e) {
    toggleFullScreen();
  },
  false
);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
