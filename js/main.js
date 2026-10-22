const SITE_CONFIG = {
  whatsappNumber: "",
  whatsappMessage: "Olá! Conheci a Titan Fight Club pelo site e gostaria de saber como agendar uma aula experimental de Muay Thai.",
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const toast = document.querySelector("[data-toast]");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

function closeMenu({ restoreFocus = false } = {}) {
  const wasOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Abrir menu";
  menu.classList.remove("is-open");
  header.classList.remove("menu-open");
  if (restoreFocus && wasOpen) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.querySelector(".sr-only").textContent = willOpen ? "Fechar menu" : "Abrir menu";
  menu.classList.toggle("is-open", willOpen);
  header.classList.toggle("menu-open", willOpen);
});

menu.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu({ restoreFocus: true });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu();
});

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const sanitizedNumber = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
const whatsappLink = sanitizedNumber
  ? `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`
  : "";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  if (whatsappLink) {
    link.href = whatsappLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Contato demonstrativo: configure o número de WhatsApp em js/main.js para ativar este botão.");
  });
});

const contactStatus = document.querySelector("[data-contact-status]");
if (whatsappLink) contactStatus.textContent = "Você será direcionado ao WhatsApp em uma nova aba.";

document.querySelectorAll("[data-demo-link]").forEach((button) => {
  button.addEventListener("click", () => showToast("Rede social demonstrativa. Adicione o endereço oficial antes de publicar."));
});

document.querySelectorAll(".accordion details").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open) return;
    document.querySelectorAll(".accordion details[open]").forEach((item) => {
      if (item !== details) item.open = false;
    });
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.documentElement.classList.add("reveal-enabled");
  reveals.forEach((element) => revealObserver.observe(element));
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
