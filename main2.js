// Sample project data (replace with your actual data)
const projects = [
    {
        category: "web",
        title: "Hotel Management Platform",
        description: "A full-featured online store with product catalog, shopping cart, and secure payment processing.",
        image: "webdevelopment/3.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "web",
        title: "EMR",
        description: "A full-featured online store with product catalog, shopping cart, and secure payment processing.",
        image: "webdevelopment/1.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "web",
        title: "Inventory & Pharmacy",
        description: "A full-featured online store with product catalog, shopping cart, and secure payment processing.",
        image: "webdevelopment/2.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "Blog",
        description: "A full-featured online store with product catalog, shopping cart, and secure payment processing.",
        image: "wordpress/1.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "E-commerce",
        description: "Free download base WordPress e-commerce website.",
        image: "wordpress/2.png",
        tags: ["PHP", "WordPress", "Elementor", "JavaScript"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "Donation & Fundraising",
        description: "A full-featured online store with product catalog, shopping cart, and secure payment processing.",
        image: "wordpress/3.png",
        tags: ["PHP", "WordPress", "Crowdfunding", "Custom"],
        links: { live: "#", github: "#" }
    },
    {
        category: "wordpress",
        title: "Consulting Services",
        description: "A full-featured online store with product catalog, shopping cart, and secure payment processing.",
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

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});