const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', () => {
	//alert('san');
    const currentTheme = document.body.getAttribute('data-theme');
    document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', document.body.getAttribute('data-theme'));
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
const projects = [
    {
        category: "web",
        title: "Hotel Management Platform",
        description: "A full-featured online Hotel management software.",
        image: "webdevelopment/3.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "web",
        title: "EMR",
        description: "A fully functional EMR software.",
        image: "webdevelopment/1.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "web",
        title: "Inventory & Pharmacy",
        image: "webdevelopment/2.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "Blog",
        image: "wordpress/1.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "E-commerce",
        description: "This is an eCommerce platform built on WordPress, allowing users to download their designs. It features custom product control, user registration, verification, a thank you page, and over 7,000 products under full control.
",
        image: "wordpress/2.png",
        tags: ["PHP", "WordPress", "Elementor", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "Donation & Fundraising",
        description: "A WordPress fundraising platform designed with robust features such as a custom dashboard, secure donation options, detailed reporting, and more to enhance fundraising efforts.",
        image: "wordpress/3.png",
        tags: ["PHP", "WordPress", "Crowdfunding", "Custom"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "Consulting Services",
        description: "Simple Bolg base Site.",
        image: "wordpress/4.png",
        tags: ["PHP", "WordPress", "Divi"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "WordPress",
        description: "A full-featured online store with product catalog, shopping cart, and secure payment processing.",
        image: "wordpress/5.png",
        tags: ["PHP", "WordPress", "Elementor"],
        links: { live: "#", github: "#" }
    },
    {
        category: "plugin",
        title: "User Management WordPress Plugin",
        description: "A productivity application for teams to collaborate on projects, assign tasks, and track progress.",
        image: "wordpress/plugin/plugin.png",
        tags: ["Vue.js", "Firebase", "SCSS", "PWA"],
        links: { live: "#", github: "#" }
    },
    {
        category: "design",
        title: "Weather Dashboard",
        description: "A responsive dashboard displaying current weather, forecasts, and historical data with interactive charts.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["JavaScript", "API Integration", "Chart.js", "Responsive Design"],
        links: { live: "#", github: "#" }
    },
    {
        category: "ecommerce",
        title: "E-commerce",
        description: "Free download base WordPress e-commerce website.",
        image: "wordpress/2.png",
        tags: ["PHP", "WordPress", "Elementor", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "ecommerce",
        title: "E-commerce",
        description: "Free download base PrestaShop e-commerce website.",
        image: "ecommerce/2.png",
        tags: ["PHP", "PrestaShop"],
        links: { live: "#", github: "#" }
    }
];

// Pagination and Filtering
const projectsGrid = document.getElementById('projects-grid');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentPage = 1;
const projectsPerPage = 6;
let currentFilter = 'all';

function renderProjects() {
    projectsGrid.innerHTML = '';
    const filteredProjects = currentFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === currentFilter);
    
    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const paginatedProjects = filteredProjects.slice(start, end);

    paginatedProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.setAttribute('data-category', project.category);
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.links.live}" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                        <a href="${project.links.github}" class="project-link"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Update pagination
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.getAttribute('data-filter');
        currentPage = 1;
        renderProjects();
    });
});

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProjects();
    }
});

nextPageBtn.addEventListener('click', () => {
    const filteredProjects = currentFilter === 'all' ? projects : projects.filter(project => project.category === currentFilter);
    if (currentPage < Math.ceil(filteredProjects.length / projectsPerPage)) {
        currentPage++;
        renderProjects();
    }
});

// Initial render
renderProjects();
// Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'var(--blur)';
            } else {
                header.style.background = 'var(--blur)';
            }
        });

        // Portfolio Filter Functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(button => button.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('hide');
                        setTimeout(() => {
                            card.classList.remove('hidden');
                        }, 10);
                    } else {
                        card.classList.add('hidden');
                        setTimeout(() => {
                            card.classList.add('hide');
                        }, 300);
                    }
                });
            });
        });

        // Enhanced shape hover effects
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach(shape => {
            shape.addEventListener('mouseenter', () => {
                shape.style.zIndex = '20';
            });
            
            shape.addEventListener('mouseleave', () => {
                shape.style.zIndex = '';
            });
        });



function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
/**Data Submit*/
// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.primary-btn');
    submitBtn.textContent = 'Sending...';
    form.classList.add('submitting');

    // Remove any existing messages
    let messageEl = form.querySelector('.form-message');
    if (messageEl) messageEl.remove();

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset();
            const successMessage = document.createElement('p');
            successMessage.className = 'form-message success';
            successMessage.textContent = 'Thank you for your message! I’ll get back to you soon.';
            form.appendChild(successMessage);
			setTimeout(function() {window.location.href = 'thanks.html';}, 2000);
        } else {
            const errorData = await response.json();
            const errorMessage = document.createElement('p');
            errorMessage.className = 'form-message error';
            errorMessage.textContent = errorData.error || 'An error occurred. Please check the domain or try again later.';
            form.appendChild(errorMessage);
        }
    } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'form-message error';
        errorMessage.textContent = 'Network error. Please try again later.';
        form.appendChild(errorMessage);
    } finally {
        submitBtn.textContent = 'Send Message';
        form.classList.remove('submitting');
    }
});






