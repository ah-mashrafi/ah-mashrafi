const root = document.documentElement;
const themeBtn = document.getElementById("theme");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

function currentTheme() {
  return root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

themeBtn.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
  burger.textContent = open ? "✕" : "☰";
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
    burger.textContent = "☰";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
