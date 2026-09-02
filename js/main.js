// Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

const galleryGrid = document.getElementById('galleryGrid');
const imageFolder = 'assets/images/galeria/';

const galleryImages = [];

function loadGallery() {
  if (galleryImages.length === 0) {
    if (galleryGrid) {
      galleryGrid.style.display = 'none';
    }
    return;
  }

  galleryImages.forEach(image => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${imageFolder}${image}" alt="Galeria Tarot Luz" loading="lazy">`;
    galleryGrid.appendChild(item);
  });
}

loadGallery();

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

const elements = document.querySelectorAll('section');
elements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.borderBottomColor = 'rgba(212, 175, 55, 0.3)';
  } else {
    header.style.borderBottomColor = 'rgba(212, 175, 55, 0.2)';
  }
});

console.log('✨ Tarot Luz - Site carregado com sucesso!');