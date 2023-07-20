let toggle = document.querySelector(".toggle");
let topbar = document.querySelector(".topbar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

export function toggleActive() {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}

export function toggleMenu() {
  let toggle = document.querySelector(".toggle");
  let topbar = document.querySelector(".topbar");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}
