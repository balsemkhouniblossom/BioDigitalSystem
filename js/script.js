/* ============================================
   MAIN JAVASCRIPT - Bio-Digital System Website
   ============================================ */

// ============================================
// UTILITY FUNCTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initModals();
    initCounters();
    initScrollAnimations();
    initSmoothScroll();
    loadCSVData();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = document.querySelector('.nav-container').contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Change navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

function initModals() {
    const demoModal = document.getElementById('demoModal');
    const partnerModal = document.getElementById('partnerModal');
    const requestDemoBtn = document.getElementById('requestDemoBtn');
    const partnerBtn = document.getElementById('partnerBtn');
    const closeButtons = document.querySelectorAll('.close');

    if (requestDemoBtn) {
        requestDemoBtn.addEventListener('click', function() {
            demoModal.style.display = 'block';
        });
    }

    if (partnerBtn) {
        partnerBtn.addEventListener('click', function() {
            partnerModal.style.display = 'block';
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === demoModal) {
            demoModal.style.display = 'none';
        }
        if (event.target === partnerModal) {
            partnerModal.style.display = 'none';
        }
    });

    // Form submissions
    const demoForm = document.getElementById('demoForm');
    const partnerForm = document.getElementById('partnerForm');

    if (demoForm) {
        demoForm.addEventListener('submit', handleFormSubmit);
    }

    if (partnerForm) {
        partnerForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    showNotification('Thank you! We will get back to you soon.', 'success');
    this.reset();
    this.closest('.modal').style.display = 'none';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideUp 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// COUNTER ANIMATION
// ============================================

function initCounters() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(element => {
        const finalValue = parseInt(element.getAttribute('data-value'), 10);
        let currentValue = 0;
        const increment = finalValue / 50; // 50 steps

        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                element.textContent = finalValue.toLocaleString();
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(currentValue).toLocaleString();
            }
        }, 30);
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-in, .feature-card, .stat-card');
    scrollElements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// DATA LOADING (Placeholder for CSV data)
// ============================================

function loadCSVData() {
    // This function would load data from CSV files in a real application
    // For now, it's a placeholder for future implementation
    console.log('CSV data loading initialized');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            func.apply(this, args);
            lastCall = now;
        }
    };
}

// ============================================
// EXPORT FUNCTIONS FOR USE IN OTHER FILES
// ============================================

window.bioDigitalUtils = {
    showNotification,
    debounce,
    throttle
};
