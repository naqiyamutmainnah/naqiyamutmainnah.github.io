// Fungsi mengetik untuk teks yang di-highlight
function typeWriter(textElement, text, speed) {
    let index = 0;

    function type() {
        if (index < text.length) {
            // Tambahkan <br> ketika menemukan newline \n
            if (text.charAt(index) === '\n') {
                textElement.innerHTML += '<br>';
            } else {
                textElement.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Gabungkan teks dengan pemisah baris
const typewriter = document.getElementById("typewriter");
const textToType = "I'M NAQIYA\nDATA ANALYST"; // Pisahkan teks dengan newline (\n)
typeWriter(typewriter, textToType, 150); // Kecepatan mengetik 150ms

// Animasi click untuk work project
const workItems = document.querySelectorAll('.work-item');
workItems.forEach(item => {
    item.addEventListener('click', () => {
        item.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        setTimeout(() => {
            item.style.boxShadow = 'none';
        }, 500); // Hilangkan efek setelah 500ms
    });
});

// Animasi click untuk tombol
const buttons = document.querySelectorAll('.rounded-button, .icon');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        setTimeout(() => {
            button.style.boxShadow = 'none';
        }, 500); // Hilangkan efek setelah 500ms
    });
});
