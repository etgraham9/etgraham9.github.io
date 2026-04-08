/* ═══════════════════════════════════════════
   ETHAN GRAHAM — PORTFOLIO SCRIPTS
   ═══════════════════════════════════════════ */

/* ── CONTACT FORM ── */
async function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const form = e.target;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#2d6a4f';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    } else {
      btn.textContent = '✗ Failed — Try Again';
      btn.style.background = '#8b2020';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = '✗ Network Error';
    btn.style.background = '#8b2020';
    btn.disabled = false;
  }
}

/* ── SCROLL SPY ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--wood-light)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── SCROLL TO TOP BUTTON ── */
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const toggleBtn = document.getElementById("themeToggle");
const themeLink = document.getElementById("themeStylesheet");

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const themeLink = document.getElementById("themeStylesheet");

  if (!toggleBtn || !themeLink) {
    console.error("Theme toggle elements not found!");
    return;
  }

  let currentTheme = localStorage.getItem("theme") || "modern";
  applyTheme(currentTheme);

  toggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "modern" ? "retro" : "modern";
    applyTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  });

  function applyTheme(theme) {
    if (theme === "retro") {
      themeLink.setAttribute("href", "style2.css");
      toggleBtn.textContent = "Switch to Modern";
    } else {
      themeLink.setAttribute("href", "style.css");
      toggleBtn.textContent = "Switch to Retro";
    }
  }
});