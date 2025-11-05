// Sayfa tamamen yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("header button");
    const contactBox = document.querySelector(".sidebar-box:nth-of-type(3)");

    // --- 1. "İletişime Geç" butonu: yumuşak kaydırma ---
    if (button && contactBox) {
        button.addEventListener("click", () => {
            contactBox.scrollIntoView({ behavior: "smooth" });
        });
    }

    // --- 2. Kartlar ve yan kutulara fade-in animasyonu ekle ---
    const animatedElements = document.querySelectorAll(".card, .sidebar-box");

    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
    });

    function showElementsOnScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.transition = "all 0.6s ease";
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", showElementsOnScroll);
    showElementsOnScroll(); // sayfa açıldığında da kontrol et
});

