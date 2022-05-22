const input = require('prompt-sync')();

class CoffeeMachine {

    constructor(water, milk, beans, cups, cash) {
        this.water = water;
        this.milk = milk;
        this.beans = beans;
        this.cups = cups;
        this.cash = cash;
    }


    start(){
        let x = input("Write action (buy, fill, take, remaining, exit):");
        switch(x) {
            case "buy":
                let type_of_coffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");

                this.coffee(type_of_coffee);
                console.log(x)
                this.start()
                break;
            case "fill":
                this.fillTank();
                this.start()
                break;
            case "take":
                this.takeMoney();
                this.start()
                break;
            case "remaining":
                this.bank()
                this.start()
                break;
            case "exit":
                process.exit();
                break;
        }
    }
    bank(){
        console.log(`The coffee machine has:
${this.water} ml of water
${this.milk} ml of milk
${this.beans} g of coffee beans
${this.cups} disposable cups
$${this.cash} of money`);
    }

    coffee(type_of_coffee){
        switch(type_of_coffee) {
            case "1":
                if (this.isEnoughWater(250)) {
                    if (this.isEnoughMilk(0)) {
                        if (this.isEnoughCoffeeBeans(16)) {
                            if (this.isEnoughCups()) {
                                console.log('I have enough resources, making you a coffee!');
                                this.water -= 250;
                                this.beans -= 16;
                                this.cups -= 1;
                                this.cash += 4;
                                this.start();
                            } else {
                                console.log('Sorry, not enough disposable cups!');
                            }
                        } else {
                            console.log('Sorry, not enough coffee beans!');
                        }
                    } else {
                        console.log('Sorry, not enough milk!');
                    }
                } else {
                    console.log('Sorry, not enough water!');
                }
                break;
            case "2":
                if (this.isEnoughWater(350)) {
                    if (this.isEnoughMilk(75)) {
                        if (this.isEnoughCoffeeBeans(20)) {
                            if (this.isEnoughCups()) {
                                console.log('I have enough resources, making you a coffee!');
                                this.water -= 350;
                                this.milk -= 75;
                                this.beans -= 20;
                                this.cups -= 1;
                                this.cash += 7;
                                this.start();
                            } else {
                                console.log('Sorry, not enough disposable cups!');
                            }
                        } else {
                            console.log('Sorry, not enough coffee beans!');
                        }
                    } else {
                        console.log('Sorry, not enough milk!');
                    }
                } else {
                    console.log('Sorry, not enough water!');
                }
                break;
            case "3":
                if (this.isEnoughWater(200)) {
                    if (this.isEnoughMilk(100)) {
                        if (this.isEnoughCoffeeBeans(20)) {
                            if (this.isEnoughCups()) {
                                console.log('I have enough resources, making you a coffee!');
                                this.water -= 200;
                                this.milk -= 100;
                                this.beans -= 20;
                                this.cups -= 1;
                                this.cash += 6;
                                this.start();
                            } else {
                                console.log('Sorry, not enough disposable cups!');
                            }
                        } else {
                            console.log('Sorry, not enough coffee beans!');
                        }
                    } else {
                        console.log('Sorry, not enough milk!');
                    }
                } else {
                    console.log('Sorry, not enough water!');
                }
                break;
        }
    }

    isEnoughWater = (waterPerCup) => (this.water - waterPerCup) > 0
    isEnoughMilk = (milkPerCup) => (this.milk - milkPerCup) > 0
    isEnoughCoffeeBeans = (beansPerCup) => (this.beans - beansPerCup) > 0
    isEnoughCups = () => this.cups > 0

 fillTank() {
     const waterToFill = +input('Write how many ml of water you want to add: ');
     const milkToFill = +input('Write how many ml of milk you want to add: ');
     const coffeeBeansToFill = +input('Write how many grams of coffee beans you want to add: ');
     const cupsToFill = +input('Write how many disposable coffee cups you want to add: ');
     this.topUp(waterToFill, milkToFill, coffeeBeansToFill, cupsToFill);
 }
 topUp(w, m, b, c){
        this.water += w;
        this.milk += m;
        this.beans += b;
        this.cups += c;
        this.bank()
 }

    takeMoney(){
    console.log(`I gave you $${this.cash}`)
    this.cash = 0;
    }
}


const poorMachine = new CoffeeMachine(    400, 540, 120, 9, 550)
poorMachine.start()