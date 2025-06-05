// Modal functionality
const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');

if (cards && modalOverlay) {
    // biome-ignore lint/complexity/noForEach: <explanation>
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.getAttribute('id');
            const cardName = card.querySelector('.nome').innerText;
            const cardChef = card.querySelector('.chef').innerText;
            
            const modalImage = modalOverlay.querySelector('.modal-image');
            const modalName = modalOverlay.querySelector('.nome');
            const modalChef = modalOverlay.querySelector('.chef');

            modalImage.src = `assets/${cardId}.png`;
            modalName.innerText = cardName;
            modalChef.innerText = cardChef;
            
            modalOverlay.classList.remove('hidden');
        });
    });

    const modalClose = document.querySelector('.modal_close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.add('hidden');
            modalOverlay.querySelector('.modal-image').src = '';
            modalOverlay.querySelector('.nome').innerText = '';
            modalOverlay.querySelector('.chef').innerText = '';
        });
    }
}

// Menu highlight
const navLinks = document.querySelectorAll('nav a');
// biome-ignore lint/complexity/noForEach: <explanation>
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // biome-ignore lint/complexity/noForEach: <explanation>
        navLinks.forEach(l => l.classList.remove('font-bold'));
        link.classList.add('font-bold');
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('opacity-100');
        mobileMenu.classList.toggle('translate-y-2');
        menuToggle.classList.toggle('rotate-90'); // Adiciona rotação ao ícone
    });
}

// Form validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('Por favor, insira um e-mail válido!');
            return;
        }
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
}

// "Show more" functionality on Sobre page
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const hiddenParagraphs = aboutSection.querySelectorAll('p.hidden');
    if (hiddenParagraphs.length > 0) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.innerText = 'Mostrar mais';
        showMoreBtn.classList.add('text-blue-500', 'mt-4', 'block', 'mx-auto');
        aboutSection.appendChild(showMoreBtn);

        showMoreBtn.addEventListener('click', () => {
            // biome-ignore lint/complexity/noForEach: <explanation>
            hiddenParagraphs.forEach(p => p.classList.toggle('hidden'));
            showMoreBtn.innerText = showMoreBtn.innerText === 'Mostrar mais' ? 'Esconder' : 'Mostrar mais';
        });
    }
}
