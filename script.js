const colors = [
    { name: "Mavi", value: "rgb(0, 0, 250)", id: "blue" },
    { name: "Sarı", value: "rgb(250, 250, 0)", id: "yellow" },
    { name: "Kırmızı", value: "rgb(250, 0, 0)", id: "red" },
    { name: "Siyah", value: "rgb(0, 0, 0)", id: "black" }
];

let score = 0;
let currentColorValue = ""; // Kullanıcının tıklaması gereken doğru renk

const keyElement = document.getElementById("key");
const scoreElement = document.getElementById("score");
const colorTabs = document.querySelectorAll(".colorTab");

function updateGame() {
    // 1. Rastgele bir metin seç (Örn: "Mavi" yazsın)
    const randomTextIndex = Math.floor(Math.random() * colors.length);
    const textToShow = colors[randomTextIndex].name;

    // 2. Metnin RENGİNİ seç (Metnin kendisinden farklı olmalı)
    let randomColorIndex;
    do {
        randomColorIndex = Math.floor(Math.random() * colors.length);
    } while (randomColorIndex === randomTextIndex); // Yazı ve renk aynıysa tekrar seç

    const colorToApply = colors[randomColorIndex].value;
    currentColorValue = colorToApply; // Doğru cevap bu renk!

    // 3. Ekrana yansıt
    keyElement.innerText = textToShow;
    keyElement.style.color = colorToApply;
}

// Karelere tıklama olayını dinle
colorTabs.forEach(tab => {
    tab.addEventListener("click", function () {
        // Tıklanan karenin arka plan rengini al
        const clickedColor = window.getComputedStyle(this).backgroundColor;

        if (clickedColor === currentColorValue) {
            score++;
            scoreElement.innerText = score;
            updateGame(); // Doğruysa yeni tura geç
        } else {
            alert("Yanlış! Skorun: " + score);
            score = 0;
            scoreElement.innerText = score;
            updateGame();
        }
    });
});

// Oyunu başlat
updateGame();