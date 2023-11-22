window.onload = function () {
    initPascal(10);
};

var factorial = function (num) {
    if (num === 0) { return 1; }
    else { return num * factorial(num - 1); }
}


var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {

        var ujsor = document.createElement("div");
        ujsor.classList.add("sor");
        document.getElementById("pascal").appendChild(ujsor);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujelem = document.createElement("div");
            ujelem.classList.add("elem");
            ujelem.innerHTML = factorial(sor)/(factorial(oszlop)*factorial(sor-oszlop))
            ujsor.appendChild(ujelem);
            //új elem div osztálylistájához add hozzá az "elem"-et
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelõ szám
            //új elem div-et vedd fel a sor elemei közé
        }
    }

};
