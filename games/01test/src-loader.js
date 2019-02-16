window.onload = function (e) {
    var ID="source";
    if(window.parent){
        var content = document.getElementById(ID).innerHTML;
        window.parent.postMessage({
            content:content,
            url: window.location.href
        }, "*");
    }else{
        alert("Это исходник игры. Откройте в браузере index.js, чтобы запустить саму игру");
    }
};