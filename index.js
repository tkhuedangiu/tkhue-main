const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");
const continueBtn = document.getElementById('continueBtn');

const texts = [
  "Hélô zịtt, anh là gà aka uvgnourt đâyy",
    "Chúc bé zịtt một ngày sinh nhật thật rực rỡ ne!!",
    "Tuổi mới mong em luônn tươi cười, mong em luonn vượt qua mọi thử thách!",
    "Còn tiếp...",
  
];

giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    setTimeout(() => {
        message.style.display = 'block';
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(confetti);
        }
    }, 1000);
    birthdayMusic.play();
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40); // Tốc độ gõ
        } else {
        setTimeout(() => {
            element.innerHTML += '<br>'; // Xóa nội dung cũ
            typeWriter(texts, element, textIndex + 1); // Chuyển sang đoạn văn tiếp theo
        }, 1000); // Đợi 2 giây rồi chuyển quan đoạn khác
        }
    } else {
        // Hình + button xuất hiện có hiệu ứng
    setTimeout(() => {
        const imgGift = document.createElement('div');
        imgGift.classList.add('img-gift');
        message.appendChild(imgGift);

        // Button hiện sau hình 600ms (để hiệu ứng đẹp thứ tự)
        setTimeout(() => {
            continueBtn.classList.remove('hidden');
        }, 600);
    }, 1300);
    }
}

giftBox.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 3500);
});
continueBtn.addEventListener('click', () => {
    // Lưu thời gian nhạc hiện tại
    localStorage.setItem('musicTime', birthdayMusic.currentTime);
    // Chuyển trang
    window.location.href = 'page2.html';
});