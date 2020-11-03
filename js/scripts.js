const toggle = document.getElementById('toggle');
const cards = document.getElementById('cards');

toggle.addEventListener('change', e => {
    cards.classList.toggle('show-annually');
})
