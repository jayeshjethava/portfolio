// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Show/hide back to top button
window.addEventListener('scroll', () => {
  const backTop = document.querySelector('.back-top');
  if (window.pageYOffset > 300) {
    backTop.style.display = 'flex';
  } else {
    backTop.style.display = 'none';
  }
});

// Initialize
window.addEventListener('load', () => {
  document.querySelector('.back-top').style.display = 'none';
  console.log('Portfolio loaded successfully!');
});
