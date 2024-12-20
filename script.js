document.addEventListener("DOMContentLoaded", () => {
    // Загружаем котиков в галерею
    const gallery = document.querySelector(".cat-grid");
    const catImages = [
        "https://cdn2.thecatapi.com/images/1.jpeg",
        "https://cdn2.thecatapi.com/images/2.jpeg",
        "https://cdn2.thecatapi.com/images/3.jpeg",
        "https://cdn2.thecatapi.com/images/4.jpeg",
        "https://cdn2.thecatapi.com/images/5.jpeg"
    ];

    catImages.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Котик";
        gallery.appendChild(img);

        // Добавляем анимацию при клике на котика
        img.addEventListener("click", () => {
            alert("Ты нашел котика! 🐱");
        });
    });

    // Открытие сюрприза
    const surpriseBtn = document.getElementById("surpriseBtn");
    surpriseBtn.addEventListener("click", () => {
        document.getElementById("popup").style.display = "flex";
        surpriseBtn.style.animation = "pulse 1s infinite";
    });

    // Закрытие попапа
    document.getElementById("closePopup").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });

    // Открытие скрытого послания
    const revealBtn = document.getElementById("revealBtn");
    const messages = document.querySelectorAll(".hidden-message");

    revealBtn.addEventListener("click", () => {
        messages.forEach((msg) => msg.classList.add("visible"));
    });
});
