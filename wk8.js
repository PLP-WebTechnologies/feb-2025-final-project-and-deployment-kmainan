// main.js
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme"));
  };
  
  document.getElementById("animateBtn").onclick = () => {
    const box = document.getElementById("animatedBox");
    box.classList.add("pop");
    setTimeout(() => box.classList.remove("pop"), 500);
  };
  
  window.onload = () => {
    if (localStorage.getItem("theme") === "true") {
      document.body.classList.add("dark-theme");
    }
  };
  