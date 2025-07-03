// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const eventsSlider = document.getElementById('eventsSlider');
const teamGrid = document.getElementById('teamGrid');
const resourcesGrid = document.getElementById('resourcesGrid');

// Sample Data
const events = [
    {
        date: 'June 15, 2023',
        title: 'Quarterly All-Hands Meeting',
        description: 'Join us for updates on company performance and upcoming initiatives.',
        image: './assets/quarterly.png'
    },
    {
        date: 'June 22, 2023',
        title: 'Tech Talk: AI Innovations',
        description: 'Exploring the latest advancements in artificial intelligence.',
           image: './assets/image.jpg'
    },
    {
        date: 'July 5, 2023',
        title: 'Summer Hackathon',
        description: '48 hours to build something amazing with your team!',
        image: './assets/hackthon.png'
    },
    {
        date: 'July 15, 2023',
        title: 'Wellness Workshop',
        description: 'Mindfulness and stress management techniques for better work-life balance.',
        image: './assets/wellness.png'
    }
];

const teamMembers = [
    {
        initials: 'JD',
        name: 'Jane Doe',
        role: 'Lead UI Designer',
        image: './assets/jane.png'
    },
    {
        initials: 'JS',
        name: 'John Smith',
        role: 'Senior Developer',
        image: './assets/john.png'
    },
    {
        initials: 'AM',
        name: 'Alex Morgan',
        role: 'Product Manager',
        image: './assets/alex.png'
    },
    {
        initials: 'SR',
        name: 'Sarah Rivera',
        role: 'UX Researcher',
        image: './assets/sarah.png'
    },
    {
        initials: 'MP',
        name: 'Michael Park',
        role: 'DevOps Engineer',
        image: './assets/michael.png'
    }
];


const resources = [
    {
        icon: 'fa-calendar-alt',
        title: 'Leave Application',
        description: 'Submit and track your leave requests'
    },
    {
        icon: 'fa-file-alt',
        title: 'Company Policies',
        description: 'Access all company guidelines'
    },
    {
        icon: 'fa-umbrella-beach',
        title: 'Holiday List',
        description: 'View upcoming company holidays'
    },
    {
        icon: 'fa-money-bill-wave',
        title: 'Pay Slips',
        description: 'Access your salary details'
    },
    {
        icon: 'fa-book',
        title: 'Employee Handbook',
        description: 'Everything you need to know'
    },
    {
        icon: 'fa-chart-line',
        title: 'Performance Reviews',
        description: 'Track your career progress'
    }
];

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
        mobileMenu.classList.remove('active');
    }
});

// Initialize Events Slider
function initEventsSlider() {
    eventsSlider.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-details">
                <span class="event-date">${event.date}</span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <a href="#" class="event-link">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');

    // Slider drag functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    eventsSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        eventsSlider.classList.add('active');
        startX = e.pageX - eventsSlider.offsetLeft;
        scrollLeft = eventsSlider.scrollLeft;
    });

    eventsSlider.addEventListener('mouseleave', () => {
        isDown = false;
        eventsSlider.classList.remove('active');
    });

    eventsSlider.addEventListener('mouseup', () => {
        isDown = false;
        eventsSlider.classList.remove('active');
    });

    eventsSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - eventsSlider.offsetLeft;
        const walk = (x - startX) * 2;
        eventsSlider.scrollLeft = scrollLeft - walk;
    });

    // Touch support
    eventsSlider.addEventListener('touchstart', (e) => {
        isDown = true;
        eventsSlider.classList.add('active');
        startX = e.touches[0].pageX - eventsSlider.offsetLeft;
        scrollLeft = eventsSlider.scrollLeft;
    });

    eventsSlider.addEventListener('touchend', () => {
        isDown = false;
        eventsSlider.classList.remove('active');
    });

    eventsSlider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - eventsSlider.offsetLeft;
        const walk = (x - startX) * 2;
        eventsSlider.scrollLeft = scrollLeft - walk;
    });
}

// Initialize Team Grid
function initTeamGrid() {
    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <div class="team-avatar">
                <span>${member.initials}</span>
            </div>
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <div class="team-social">
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    `).join('');
}

// Initialize Resources Grid
function initResourcesGrid() {
    resourcesGrid.innerHTML = resources.map(resource => `
        <div class="resource-card">
            <div class="resource-icon">
                <i class="fas ${resource.icon}"></i>
            </div>
            <h3 class="resource-title">${resource.title}</h3>
            <p class="resource-desc">${resource.description}</p>
        </div>
    `).join('');
}

// Initialize All Components on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initEventsSlider();
    initTeamGrid();
    initResourcesGrid();
});
