document.addEventListener('DOMContentLoaded', () => {
    const words = ["Elegance", "Minimalism", "Comfort"];
    let wordIndex = 0;

    setInterval(() => {
        document.getElementById('changing-word').textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
    }, 3000);
});