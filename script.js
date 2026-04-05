/* =========================================
   TYPED / ROTATING HERO WORD
   ========================================= */
const typedWord = document.getElementById('typedWord');
const words = ['Clear', 'Premium', 'Credible', 'Intentional', 'Recruiter-Ready'];
let wordIndex = 0;

function rotateWords() {
  if (!typedWord) return;
  typedWord.classList.add('fade-word');
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    typedWord.textContent = words[wordIndex];
    typedWord.classList.remove('fade-word');
  }, 220);
}

setInterval(rotateWords, 2400);

/* =========================================
   MOBILE MENU TOGGLE
   ========================================= */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* =========================================
   BACK TO TOP + WHATSAPP ELEMENT REFERENCES
   ========================================= */
const backToTop = document.getElementById('backToTop');
const whatsappButton = document.getElementById('whatsappButton');
const whatsappPreview = document.getElementById('whatsappPreview');
const closeWhatsappPreview = document.getElementById('closeWhatsappPreview');

/* =========================================
   SCROLL EVENTS
   - Show/hide back-to-top button
   - Update active nav state
   ========================================= */
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop?.classList.add('show');
  } else {
    backToTop?.classList.remove('show');
  }

  updateActiveNav();
});

/* =========================================
   BACK TO TOP BUTTON ACTION
   ========================================= */
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.focus?.();
});

/* =========================================
   WHATSAPP BUTTON DELAYED APPEARANCE
   ========================================= */
setTimeout(() => {
  whatsappButton?.classList.add('show');
}, 1200);

/* =========================================
   WHATSAPP PREVIEW TOGGLE
   ========================================= */
whatsappButton?.addEventListener('click', () => {
  whatsappPreview?.classList.toggle('show');
});

/* =========================================
   WHATSAPP PREVIEW CLOSE BUTTON
   ========================================= */
closeWhatsappPreview?.addEventListener('click', () => {
  whatsappPreview?.classList.remove('show');
});

/* =========================================
   CLOSE WHATSAPP PREVIEW WHEN CLICKING OUTSIDE
   ========================================= */
document.addEventListener('click', (event) => {
  const stack = document.querySelector('.whatsapp-stack');
  if (!stack) return;

  if (!stack.contains(event.target)) {
    whatsappPreview?.classList.remove('show');
  }
});

/* =========================================
   SCROLL REVEAL ANIMATION SETUP
   ========================================= */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16
  }
);

/* Observe every reveal element */
revealElements.forEach((element) => revealObserver.observe(element));

/* =========================================
   ACTIVE NAV LINK HIGHLIGHTING
   ========================================= */
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];

function updateActiveNav() {
  const scrollPosition = window.scrollY + 140;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
      });
    }
  });
}

updateActiveNav();

/* =========================================
   CURSOR GLOW FOLLOW EFFECT
   ========================================= */
const cursorGlow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

/* =========================================
   DEMO CONTACT FORM BUTTON
   - Simple front-end validation
   - Placeholder alert until backend is connected
   ========================================= */
const formButton = document.querySelector('.form-btn');
formButton?.addEventListener('click', () => {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    alert('Please complete the name, email, and message fields first.');
    return;
  }

  alert('Demo only: connect this form to Formspree or your own backend to send real enquiries.');
});


/* =========================================
   MOBILE NAV CLOSE
   ========================================= */
document.addEventListener('click', (event) => {
  const clickedInsideMenu = navMenu?.contains(event.target);
  const clickedToggle = menuToggle?.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle) {
    navMenu?.classList.remove('show');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});