// TYPING EFFECT
const roles = ["Frontend Developer", "React Enthusiast", "B.Tech CSE Student"];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex][charIndex++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, --charIndex);
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

type();

// PROJECTS (✅ PERSONAL FINANCE DASHBOARD ADDED)
const projects = [
  {
    title: "Personal Finance Dashboard",
    desc: "A web application to track income, expenses, budgets and visualize financial data.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=400&q=80",
    live: "#",
    github: "#"
  },
  {
    title: "Suspicious Link Scanner",
    desc: "A cybersecurity tool to detect malicious links.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
    live: "https://khushipal-01.github.io/Portfolio/",
    github: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio built with HTML, CSS, JS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    live: "#",
    github: "#"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  projectList.innerHTML += `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}">
      <div class="content">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="project-links">
          <a href="${project.live}">Live Demo</a>
          <a href="${project.github}">GitHub</a>
        </div>
      </div>
    </div>
  `;
});

// CONTACT FORM
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent =
    'Thank you! Your message has been sent.';
  this.reset();
});

// SMOOTH SCROLL
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});


