(function () {

    var counter = document.querySelector(".counter");
    var count = 3;

    setInterval(function () {
        counter.innerHTML = String(--count);

        if (!count) {
            location.href = "/";
        }
    }, 3000);

})();