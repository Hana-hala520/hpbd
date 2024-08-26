function openBox() {
    const lid = document.getElementById('lid');
    const card = document.getElementById('card');
    const openButton = document.querySelector('.open-button');

    lid.classList.add('open');
    card.classList.add('show');
    openButton.style.display = 'none';
}

function showConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    confettiContainer.style.display = 'block';

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        confetti.style.position = 'absolute';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear infinite`;
        confetti.style.borderRadius = '50%';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = Math.random();
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.style.display = 'none';
        confettiContainer.innerHTML = '';
    }, 5000);
}

document.getElementById('lid').addEventListener('transitionend', function() {
    this.style.transform = 'translateY(-150px)';
});
