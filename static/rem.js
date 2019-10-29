(function(){
    var docEl = document.documentElement;

    function setRemUint(){
        var rem = docEl.clientWidth*(window.devicePixelRatio||1) / 10;
        docEl.style.fontSize = rem + 'px';
    }

    setRemUint();

    window.addEventListener('resize', setRemUint);
})();