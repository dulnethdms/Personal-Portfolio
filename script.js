// Smooth scroll navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Modal handling
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');

loginBtn.onclick = () => modal.style.display = 'flex';
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; };

// Responsive nav toggle (optional hamburger)
const navbar = document.querySelector('.navbar');
document.addEventListener('keydown', e => {
  if(e.key === 'm') navbar.classList.toggle('active'); // press 'm' to toggle menu
});

// Contact form submission (demo only)
document.querySelector('.contact form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
});
