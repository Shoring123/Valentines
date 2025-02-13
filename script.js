function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page${pageNumber}`).classList.add('active');
}
function prevPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page${pageNumber}`).classList.add('active');
}
function selectOption(option) {
    if (option === 'yes') {
        nextPage(10);
    } else if (option === 'no') {
        prevPage(9);
    }
}