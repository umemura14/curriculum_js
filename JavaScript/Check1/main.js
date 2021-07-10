//問１

let numbers = [2,5,12,13,15,18,22];
let num = []
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0) {
        num.push(numbers[i])
    }
}
function isEven(num){

    console.log(num + "は偶数です");
}
isEven(num);

//問２
class Car {
    constructor(gasorin,numbers) {
        this.suuzi1 = gasorin;
        this.suuzi2 = numbers
    }

    getNumGas() {
        console.log("ガソリンは" + this.suuzi1 + "です。");
        console.log("ナンバーは" + this.suuzi2 + "です。");
    }

}

let gass = new Car(10,1111);
gass.getNumGas();
