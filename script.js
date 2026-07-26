// Countering //
const projectSection = document.getElementById("Build-section");
const counters = [
  { id: "num1", target: 50 },
  { id: "num2", target: 110 },
  { id: "num3", target: 260 },
  { id: "num4", target: 20 },
];

let started = false;

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !started) {
    started = true;

    counters.forEach((item) => {
      counter(item.id, item.target);
    });
  }
});

observer.observe(projectSection);

function counter(id, target) {
  const element = document.getElementById(id);

  let count = 0;

  const interval = setInterval(() => {
    count++;
    element.textContent = count + "+";

    if (count >= target) {
      clearInterval(interval);
    }
  }, 30);
}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});
