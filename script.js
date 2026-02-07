// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeFormHandling();
    addScrollEffects();
    setupNavigation();
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});
// HERO SLIDER LOAD
fetch("hero.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("hero").innerHTML = data;
        loadHeroImages();
    });

function loadHeroImages() {
    const images = [
        "images/hero/1.jpg",
        "images/hero/2.jpg",
         "images/hero/3.jpg",
        "images/hero/4.jpg",
         "images/hero/5.jpg",
        "images/hero/6.jpg",
         "images/hero/7.jpg",
        "images/hero/8.jpg",
        "images/hero/9.jpg"       
    ];

    const container = document.getElementById("heroSlides");

    images.forEach((img, index) => {
        container.innerHTML += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${img}" class="d-block w-100 hero-img" alt="">
            </div>
        `;
    });
}

// Form handling
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Success message
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
            
            // Close modal
            const modalElement = document.getElementById('contactModal');
            const modal = new bootstrap.Modal(modalElement);
            if (modal) {
                modal.hide();
            }
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll effects
function addScrollEffects() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Navigation active state
function setupNavigation() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || 
            (currentLocation === '/' && href === 'index.html') ||
            (currentLocation.includes('index') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .program-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Initialize animations
animateOnScroll();

// Add some additional styles dynamically
function enhanceStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .mission-box {
            padding: 2rem;
            border-left: 4px solid var(--accent);
            background: #fafafa;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .mission-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .mission-box ul {
            list-style: none;
            padding: 0;
        }
        
        .mission-box li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            color: var(--text-dark);
        }
        
        .mission-box li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--accent);
            font-weight: bold;
        }
        
        .why-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .why-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }
        
        .why-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent);
        }
        
        .why-card h5 {
            color: var(--primary);
            font-weight: 600;
            margin: 1rem 0;
        }
        
        .stat-box {
            padding: 2rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .value-item {
            padding: 1.5rem;
            background: white;
            border-radius: 8px;
            border-left: 4px solid var(--accent);
            transition: all 0.3s ease;
        }
        
        .value-item:hover {
            transform: translateX(5px);
        }
        
        .activity-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            border-top: 3px solid var(--accent);
        }
        
        .activity-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }
        
        .activity-card h5 {
            color: var(--primary);
            font-weight: 600;
            margin: 1rem 0;
        }
        
        .facility-item {
            padding: 1.5rem;
            background: white;
            border-radius: 8px;
            border-bottom: 3px solid var(--accent);
            transition: all 0.3s ease;
        }
        
        .facility-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .program-highlight {
            transition: all 0.3s ease;
        }
        
        .program-highlight:hover {
            transform: scale(1.02);
        }
    `;
    document.head.appendChild(style);
}

// Apply enhanced styles
enhanceStyles();

// Import Bootstrap
const bootstrap = window.bootstrap;
// FOOTER LOAD
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

    
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".popup-img");
    const modalImg = document.getElementById("modalImage");
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.show();
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    // 👉 SIRF IMAGE NUMBERS ADD KARO
    const images = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19
    ];

    const extensions = ["jpg", "JPG", "jpeg", "JPEG"];

    const gallery = document.getElementById("galleryContainer");
    const modalImg = document.getElementById("modalImage");
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));

    images.forEach(num => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3";

        const img = document.createElement("img");
        img.className = "img-fluid popup-img";
        img.style.height = "220px";
        img.style.objectFit = "cover";
        img.style.cursor = "pointer";
        img.loading = "lazy";

        let extIndex = 0;

        function tryNextExtension() {
            if (extIndex >= extensions.length) return;
            img.src = `images/gallery/${num}.${extensions[extIndex++]}`;
        }

        img.onerror = tryNextExtension;
        tryNextExtension();

        img.addEventListener("click", function () {
            modalImg.src = img.src;
            modal.show();
        });

        const card = document.createElement("div");
        card.className = "card gallery-card";
        card.appendChild(img);

        col.appendChild(card);
        gallery.appendChild(col);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("openingPopup");
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
