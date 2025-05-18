const heroImage = document.querySelector('.hero-image');
const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('animationend', () => {
        letter.classList.remove('animate');
        letter.classList.add('scroll-anim');
    });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const progress = Math.min(scrollY / viewportHeight, 1);

    heroImage.style.transform = `translateY(${-progress * 30}%)`;

    document.querySelectorAll('.scroll-anim').forEach((letter, index) => {
        const delay = index * 0.1;
        const adjustedProgress = Math.max(progress - delay, 0);
        letter.style.transform = `translateY(${-adjustedProgress * 400}%)`;
        letter.style.opacity = `${1 - progress * 3}`;
    });
});

// Плавный скролл к прайс-карте по клику на кнопку
document.querySelector('.cta-button').addEventListener('click', () => {
    const target = document.querySelector('.content');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});
