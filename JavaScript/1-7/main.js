class Taiyaki {

    constructor(name) {
        this.name = name;
    }

    hyouzi() {
        console.log(`中身は${this.name}です`);
    }
}

let annko = new Taiyaki('あんこ');
let kuremu = new Taiyaki('クリーム');
let chezu = new Taiyaki('チーズ');
annko.hyouzi();
kuremu.hyouzi();
chezu.hyouzi();