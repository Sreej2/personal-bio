// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      if (isElementInViewport(bar)) {
        bar.style.width = width;
      }
    });
  }
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Initial check and then on scroll
  animateSkillBars();
  window.addEventListener('scroll', animateSkillBars);
  
  // Add active class to navigation links on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
