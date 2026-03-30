const message2 = document.getElementById('message2');
const birthdayText2 = document.getElementById("birthdayText2");
const birthdayMusic = document.getElementById("birthdayMusic");
const personalBtn = document.getElementById('personalBtn');

// ====================== TEXT TRANG 2 (bạn thay nội dung tùy ý) ======================
const texts2 = [
  "Anh chúc zịtt không dừng bước trên con đường của mình",
  "Zịtt giỏii mà!! Em sẽ làm được thôii 'YOU WORTH IT'!!",
  "Lỡ mà có khó khăn thì cũng đừng lo nhaa vì luôn có rất nhiều người yêu thương và giúp đỡ em và...",
  "Có thể zịtt hongg cần nhưng gà vẫn luônn ở đây á😊!.",
  "❤️20 rực rỡ nhé❤️"
];

// Hàm typewriter (copy từ file cũ)
function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40);
        } else {
            setTimeout(() => {
            element.innerHTML += '<br>'; // Xóa nội dung cũ
            typeWriter(texts, element, textIndex + 1); // Chuyển sang đoạn văn tiếp theo
        }, 1000);
        }
    }else {
        // === CHỮ ĐÃ GÕ XONG → HIỆN BUTTON ===
        setTimeout(() => {
            personalBtn.classList.remove('hidden');
        }, 800);   // delay 0.8 giây cho mượt
    }
}

// Khi trang 2 load
window.addEventListener('load', () => {
    // Resume nhạc từ thời gian cũ
    const savedTime = localStorage.getItem('musicTime');
    if (savedTime) {
        birthdayMusic.currentTime = parseFloat(savedTime);
        localStorage.removeItem('musicTime');
    }
    birthdayMusic.play();

    // Bắt đầu gõ chữ
    setTimeout(() => {
        typeWriter(texts2, birthdayText2);
    }, 800);
});
// ====================== NÚT TRANG CÁ NHÂN ======================
personalBtn.addEventListener('click', () => {
    console.log("✅ Đang mở trang cá nhân...");

    // THAY LINK CỦA BẠN VÀO ĐÂY (có thể là Facebook, Instagram, TikTok, website...)
    window.open("https://www.instagram.com/_uvgnourt_/", "_blank");
    // Nếu muốn mở cùng tab thì dùng: window.location.href = "https://...";
});