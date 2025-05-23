document.addEventListener('DOMContentLoaded', function () {
    // Header scroll shrink effect
    const header = document.querySelector("header");

    // About Me "View More" toggle (for mobile screens)
const aboutText = document.getElementById("aboutText");
if (aboutText) {
    const toggleBtn = aboutText.querySelector(".view-toggle");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            const isCollapsed = aboutText.classList.contains("collapsed");
            aboutText.classList.toggle("collapsed", !isCollapsed);
            aboutText.classList.toggle("expanded", isCollapsed);
            toggleBtn.textContent = isCollapsed ? "View Less" : "View More";
        });
    }
}


    window.addEventListener("scroll", function () {
        header.classList.toggle("header-scrolled", window.scrollY > 50);
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const closeBtn = document.getElementById('closeNav');

    if (menuBtn && navLinks) {
        // Open menu
        menuBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent bubbling to document
            navLinks.classList.add('active');
        });

        // Close menu with close button
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        }

        // Close when clicking outside navLinks and menuBtn
        document.addEventListener('click', function (e) {
            if (
                navLinks.classList.contains('active') &&
                !navLinks.contains(e.target) &&
                e.target !== menuBtn
            ) {
                navLinks.classList.remove('active');
            }
        });

        // Close when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
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
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Certificate modal functionality
    const viewButtons = document.querySelectorAll(".view-certificate");
    viewButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const certId = button.closest(".certification-card").getAttribute("data-certificate");
            const modal = document.getElementById(certId + "Modal");
            if (modal) {
                modal.classList.add("active");
            }
        });
    });

    const closeButtons = document.querySelectorAll(".modal-close");
    closeButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            btn.closest(".modal").classList.remove("active");
        });
    });

    // Close modal on outside click
    window.addEventListener("click", function (event) {
        document.querySelectorAll(".modal").forEach((modal) => {
            if (event.target === modal) {
                modal.classList.remove("active");
            }
        });
    });
});

const viewBtn = document.getElementById("view-more-btn");
  let isExpanded = false;

  viewBtn.addEventListener("click", () => {
    const hiddenCards = document.querySelectorAll(".certification-card.hidden");

    hiddenCards.forEach(card => {
      card.style.display = isExpanded ? "none" : "block";
    });

    viewBtn.textContent = isExpanded ? "View More" : "View Less";
    isExpanded = !isExpanded;
  });

