var vjs = document.getElementsByClassName('vjs-time-range-current')[0]
var chats = Array.from(document.getElementsByClassName('chat-time'));

function getChatTime(a) {
    return (a.replaceAll(':', ''));
}

setInterval(function() {
    var st = getChatTime(vjs.innerText);
    
    (chats).forEach((dateElement) => {
        var date = new Number(getChatTime(dateElement.innerText)) + 0;
            dateElement.parentNode.parentNode.setAttribute('style', '');
        if(st >= date) {
            dateElement.parentNode.parentNode.style.display = 'block';
        } else {
            dateElement.parentNode.parentNode.style.display = 'none';
        }
        
        document.getElementsByClassName('zm-scrollbar__wrap')[0].scrollTop = 99999
    });
}, 100);