function updateModels() {
    let selectedBrand = document.getElementById('brand').value;
    let carCards = document.querySelectorAll('.car-card');
        carCards.forEach(card => {
        if (selectedBrand === "" || card.getAttribute('data-brand') === selectedBrand) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });
}