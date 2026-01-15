const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector("i");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.className = savedTheme;
  icon.className = savedTheme === "dark"
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
}

// Toggle theme
toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");

  document.body.className = isDark ? "light" : "dark";
  icon.className = isDark
    ? "fa-solid fa-moon"
    : "fa-solid fa-sun";

  localStorage.setItem("theme", document.body.className);
});
