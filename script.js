function flipCard(icon) {
    const cardInner = icon.closest('.card-inner');
    cardInner.classList.toggle('flipped');
}
