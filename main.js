// вешаем событие клика на весь документ
document.onclick = function(event) {
    // для старых браузеров
    event = event || window.event;
    
    if(event.target.tagName === 'IMG') {
        event.target.classList.add('bordered');
    }
}