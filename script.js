function togglePlanos() {
    const checkBox = document.getElementById("plan-switch");
    const vBasico = document.getElementById("valor-basico");
    const vInter = document.getElementById("valor-inter");
    const vAvancado = document.getElementById("valor-avancado");

    if (checkBox.checked == true) {
        vBasico.innerText = "199";
        vInter.innerText = "349";
        vAvancado.innerText = "599";
    } else {
        vBasico.innerText = "99";
        vInter.innerText = "179";
        vAvancado.innerText = "299";
    }
}

const container = document.querySelector('.carrossel-container');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

btnNext.addEventListener('click', () => {
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: 380, behavior: 'smooth' });
    }
});

btnPrev.addEventListener('click', () => {
    if (container.scrollLeft <= 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: -380, behavior: 'smooth' });
    }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!isOpen) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});