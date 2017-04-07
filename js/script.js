function Smartphone(brand, price, color, screen) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
}

Smartphone.prototype.printInfo = function () {
    console.log('Marka telefonu to ' + this.brand + ', kolor to ' + this.color + ', a cena to ' + this.price + ' zł.');
};

Smartphone.prototype.printScreenInfo = function () {
    var screenInfo = '';
    for (var i = 0; i < this.screen.length; i++) {
        if (i == 0) {
            screenInfo += 'Telefon ma wyświetlacz o przekątnej ' + this.screen[i];
        } else {
            screenInfo += ' i rozdzielczości ' + this.screen[i] + ' px.';
        }
    }
    console.log(screenInfo);
}

var sGalaxyS6 = new Smartphone('Samsung', 1800, 'biały', ['5.1 cala', '2560x1440']),
    iPhone6S = new Smartphone('Apple', 2900, 'srebrny', ['4.7 cala', '1334x750']),
    opOne = new Smartphone('OnePlus', 1300, 'czarny', ['5.5 cala', '1920x1080']);

sGalaxyS6.printInfo();
sGalaxyS6.printScreenInfo();

iPhone6S.printInfo();
iPhone6S.printScreenInfo();

opOne.printInfo();
opOne.printScreenInfo();