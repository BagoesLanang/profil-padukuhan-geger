// ======================================
// HEADER SCROLL
// ======================================

const header = document.querySelector(".header");

if (header && !header.classList.contains("transparant")) {

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

}
// Scroll To Top

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// =============================
// LIGHTBOX GALERI
// =============================

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".lightbox-close");

if (galleryItems.length > 0 && lightbox && lightboxImg && closeLightbox) {

    galleryItems.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("show");
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("show");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("show");

        }

    });

}