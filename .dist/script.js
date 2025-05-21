// JavaScript for the website
    window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("header-scrolled", window.scrollY > 50);
});
// Mobile menu toggle logic
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Shrink header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("header-scrolled", window.scrollY > 50);
});

    // Show sections with animation on scroll
    document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        
        if (menuBtn) {
            menuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }
        
        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Scroll reveal animation
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1
        });
        
        sections.forEach(section => {
            observer.observe(section);
        });

        // Certificate modal functionality
        // View buttons
        const viewButtons = document.querySelectorAll(".view-certificate");

        viewButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const certId = button.closest(".certification-card").getAttribute("data-certificate");
                const modal = document.getElementById(certId + "Modal");
                if (modal) {
                    modal.classList.add("active"); // show modal using class
                }
            });
        });

        // Close buttons
        const closeButtons = document.querySelectorAll(".modal-close");

        closeButtons.forEach((btn) => {
            btn.addEventListener("click", function () {
                btn.closest(".modal").classList.remove("active"); // hide modal using class
            });
        });

        // Click outside modal-content to close
        window.addEventListener("click", function (event) {
            document.querySelectorAll(".modal").forEach((modal) => {
                if (event.target === modal) {
                    modal.classList.remove("active");
                }
            });
        });
    });
    