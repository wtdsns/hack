// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for section reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-reveal');
    observer.observe(section);
});

// Countdown timer function
function updateCountdown() {
    const eventDate = new Date('2025-10-06T23:59:59').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance < 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: true
        };
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return {
        days,
        hours,
        minutes,
        seconds,
        expired: false
    };
}

// Initialize countdown if element exists
const countdownElement = document.getElementById('countdown');
if (countdownElement) {
    setInterval(() => {
        const time = updateCountdown();
        if (!time.expired) {
            countdownElement.innerHTML = `
                <div class="flex justify-center gap-4 md:gap-8">
                    <div class="text-center">
                        <div class="text-4xl md:text-6xl font-bold text-groq-orange countdown-number">${time.days}</div>
                        <div class="text-sm text-gray-400 mt-2">Days</div>
                    </div>
                    <div class="text-4xl md:text-6xl font-bold text-gray-600">:</div>
                    <div class="text-center">
                        <div class="text-4xl md:text-6xl font-bold text-groq-orange countdown-number">${time.hours}</div>
                        <div class="text-sm text-gray-400 mt-2">Hours</div>
                    </div>
                    <div class="text-4xl md:text-6xl font-bold text-gray-600">:</div>
                    <div class="text-center">
                        <div class="text-4xl md:text-6xl font-bold text-groq-orange countdown-number">${time.minutes}</div>
                        <div class="text-sm text-gray-400 mt-2">Minutes</div>
                    </div>
                    <div class="text-4xl md:text-6xl font-bold text-gray-600">:</div>
                    <div class="text-center">
                        <div class="text-4xl md:text-6xl font-bold text-groq-orange countdown-number">${time.seconds}</div>
                        <div class="text-sm text-gray-400 mt-2">Seconds</div>
                    </div>
                </div>
            `;
        } else {
            countdownElement.innerHTML = '<div class="text-3xl font-bold text-groq-orange">Event Started!</div>';
        }
    }, 1000);
}

// Animated number counter
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger number animations when elements come into view
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateNumber(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(element => {
    numberObserver.observe(element);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('Copied to clipboard!');
    }
}

// Show notification toast
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-y-0 opacity-100';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// Add ripple effect to buttons
document.querySelectorAll('button, .btn-ripple').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple-effect';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Track active section in navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function setActiveNav() {
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Mobile menu toggle (if needed in future)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('closed');
    });
}

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Scroll to top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopButton.className = 'fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full shadow-lg z-50 transition-all duration-300 opacity-0 pointer-events-none';
scrollTopButton.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.pointerEvents = 'auto';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.pointerEvents = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add stagger animation class to cards
document.querySelectorAll('.grid > div').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    setActiveNav();
}, 50);

window.addEventListener('scroll', debouncedScroll);

// Console message for developers
console.log('%c🚀 Groq Real-time AI Agent Hackathon', 'font-size: 20px; font-weight: bold; color: #DC2626;');
console.log('%cBuilding the future of AI agents, one line of code at a time.', 'font-size: 14px; color: #666;');
console.log('%cInterested in the tech behind this page? Check out the source code!', 'font-size: 12px; color: #999;');

// Analytics placeholder (replace with actual analytics code)
function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
    // Add your analytics tracking code here (e.g., Google Analytics, Mixpanel)
}

// Track button clicks
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', function() {
        const text = this.textContent.trim();
        const href = this.getAttribute('href');
        trackEvent('Click', 'Button/Link', text || href);
    });
});

// Prevent default form submission (if forms are added later)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission
        showNotification('Form submitted successfully!');
    });
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hackathon landing page loaded successfully! 🎉');
});

// Add Easter egg
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        showNotification('🎉 Secret code activated! You are a true hacker! 🚀', 5000);
        document.body.style.animation = 'gradient-shift 5s ease infinite';
    }
});
