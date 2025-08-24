// Scroll animations for cards and about section
const elements = document.querySelectorAll('.card, .about h2, .about p');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
