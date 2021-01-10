// вешаем событие клика на весь документ
document.addEventListener('click', function({ target }) {
    if(target.tagName === 'IMG') {
        target.classList.add('bordered');
    }
})