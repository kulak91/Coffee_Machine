


class CoffeeMachine {

    constructor(water, milk, beans, cups, cash) {
        this.water = water;
        this.milk = milk;
        this.beans = beans;
        this.cups = cups;
        this.cash = cash;
    }

    launchGame(){
        document.getElementById('launch').style.display = 'none';
        let x = document.querySelectorAll('.controllers');
        x.forEach(el => el.style.display = 'inline');
        document.getElementById("demo").innerHTML = "Choose action:"
        this.updateMenu()
    }
    start(x){
        

       // let x = prompt("Write action (buy, fill, take, remaining, exit):");
        if (x != null) {
            
            document.getElementById("demo").innerHTML =
            "Action: " + x;
          }
        switch(x) {
            case "buy":
                let type_of_coffee = prompt("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");

                
                this.coffee(type_of_coffee);
                this.updateMenu()
                this.start()
                break;
            case "fill":
                this.fillTank();
                //this.creation();
                break;
            case "take":
                this.takeMoney();
                //this.creation();
                this.bank();
                this.updateMenu()
              
               
        }
    }
    updateMenu(){
     document.getElementById('menu-item-water').textContent = this.water;
     document.getElementById('menu-item-milk').textContent = this.milk;
     document.getElementById('menu-item-beans').textContent = this.beans;
     document.getElementById('menu-item-cups').textContent = this.cups;
     document.getElementById('menu-item-cash').textContent = this.cash;
    }

    creation() {
       
       // document.getElementById('create-me-something').style.display="none"
        let x = document.createElement('div');
        let ingredient = document.querySelector(".ingredients")
          
            
            
       
            x.insertAdjacentHTML("beforeend",
            '<div class="custom-list">' +
            
            '<span class="task">'+ `The coffee machine has:
            <ul>
            <li><b>${this.water}</b> ml of water</li>
            <li><b>${this.milk}</b> ml of milk</li>
            <li><b>${this.beans}</b> g of coffee beans</li>
            <li><b>${this.cups}</b> disposable cups</li>
            <li><b>$${this.cash}</b> of money</li></ul>` +'</span>' +
            '<button class="button-delete" onclick="poorMachine.deleteTask(this)"></button></div>' );
        
        ingredient.appendChild(x);
   
        setTimeout(()=>{x.remove(); document.getElementById('create-me-something').style.display="inline-block"}, 30000)
           
           
   };

   recipe(coffee){

    let elem = document.getElementById('bank1')
    elem.style.display='block';
    if(coffee === 'Espresso'){
       
        elem.innerHTML = `<div class="custom-list"><span class=task> ${coffee} requiers:
            <ul>
            <li><b>250</b> ml of water</li>
            <li><b>16</b> g of beans</li>
            <li><b>1</b> cup</li>
            <li><b>$4</b> per cup</li>
            </ul>
            </span></div> <button class="button-delete-recipe" onclick="poorMachine.hideRecipe(this)"></button>`
    }
    if (coffee === "Latte") {
        
        elem.innerHTML = `<div class="custom-list"><span class=task> ${coffee} requiers:
            <ul>            
            <li><b>350</b> ml of water</li>
            <li><b>75</b> ml of milk</li>
            <li><b>20</b> g of beans</li>
            <li><b>1</b> cup</li>
            <li><b>$7</b> per cup</li>
            </ul>
            </span></div> <button class="button-delete-recipe" onclick="poorMachine.hideRecipe(this)"></button>`
    }
    if(coffee === "Cappuccino"){
        elem.innerHTML = `<div class="custom-list"><span class=task> ${coffee} requiers:
            <ul>
            <li><b>200</b> ml of water</li>
            <li><b>100</b> ml of milk</li>
            <li><b>20</b> g of beans</li>
            <li><b>1</b> cup</li>
            <li><b>$6</b> per cup</li>
            </ul>
            </span></div> <button class="button-delete-recipe" onclick="poorMachine.hideRecipe(this)"></button>`
    }
    }             

    hideRecipe(obj){
        obj.parentNode.style.display='none'
    }

   deleteTask(obj){ obj.parentNode.parentNode.remove();
    document.getElementById('create-me-something').style.display="inline-block"}


    bank(){
       //document.getElementById("bank").textContent=`The coffee machine has:
       //${this.water} ml of water
       //${this.milk} ml of milk
       //${this.beans} g of coffee beans
       //${this.cups} disposable cups
       //$${this.cash} of money`
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
                                console.log('I have enough resources, making you espresso!');
                                this.water -= 250;
                                this.beans -= 16;
                                this.cups -= 1;
                                this.cash += 4;
                                document.getElementById('dialogoverlay').style.display = "none";
		                        document.getElementById('dialogbox').style.display = "none";
                                this.updateMenu()
                            } else {
                                console.log('Sorry, not enough disposable cups! Please add more using "Add Ingredients" button.');
                            }
                        } else {
                            console.log('Sorry, not enough coffee beans! Please add more using "Add Ingredients" button.');
                        }
                    } else {
                        console.log('Sorry, not enough milk! Please add more using "Add Ingredients" button.');
                    }
                } else {
                    console.log('Sorry, not enough water! Please add more using "Add Ingredients" button.');
                }
                break;
            case "2":
                if (this.isEnoughWater(350)) {
                    if (this.isEnoughMilk(75)) {
                        if (this.isEnoughCoffeeBeans(20)) {
                            if (this.isEnoughCups()) {
                                console.log('I have enough resources, making you a latte!');
                                this.water -= 350;
                                this.milk -= 75;
                                this.beans -= 20;
                                this.cups -= 1;
                                this.cash += 7;
                                document.getElementById('dialogoverlay').style.display = "none";
		                        document.getElementById('dialogbox').style.display = "none";
                                this.updateMenu()
                               
                            } else {
                                console.log('Sorry, not enough disposable cups! Please add more using "Add Ingredients" button.');
                            }
                        } else {
                            console.log('Sorry, not enough coffee beans! Please add more using "Add Ingredients" button.');
                        }
                    } else {
                        console.log('Sorry, not enough milk! Please add more using "Add Ingredients" button.');
                    }
                } else {
                    console.log('Sorry, not enough water! Please add more using "Add Ingredients" button.');
                }
                break;
            case "3":
                if (this.isEnoughWater(200)) {
                    if (this.isEnoughMilk(100)) {
                        if (this.isEnoughCoffeeBeans(20)) {
                            if (this.isEnoughCups()) {
                                console.log('I have enough resources, making you a cappuccino!');
                                this.water -= 200;
                                this.milk -= 100;
                                this.beans -= 20;
                                this.cups -= 1;
                                this.cash += 6;
                                document.getElementById('dialogoverlay').style.display = "none";
		                        document.getElementById('dialogbox').style.display = "none";
                                this.updateMenu()
                                
                            } else {
                                console.log('Sorry, not enough disposable cups! Please add more using "Add Ingredients" button.');
                            }
                        } else {
                            console.log('Sorry, not enough coffee beans! Please add more using "Add Ingredients" button.');
                        }
                    } else {
                        console.log('Sorry, not enough milk! Please add more using "Add Ingredients" button.');
                    }
                } else {
                    console.log('Sorry, not enough water! Please add more using "Add Ingredients" button.');
                }
                break;
        }
    }

    isEnoughWater = (waterPerCup) => (this.water - waterPerCup) > 0
    isEnoughMilk = (milkPerCup) => (this.milk - milkPerCup) > 0
    isEnoughCoffeeBeans = (beansPerCup) => (this.beans - beansPerCup) > 0
    isEnoughCups = () => this.cups > 0

 fillTank() {
     const waterToFill = +prompt('Write how many ml of water you want to add: ');
     const milkToFill = +prompt('Write how many ml of milk you want to add: ');
     const coffeeBeansToFill = +prompt('Write how many grams of coffee beans you want to add: ');
     const cupsToFill = +prompt('Write how many disposable coffee cups you want to add: ');
     this.topUp(waterToFill, milkToFill, coffeeBeansToFill, cupsToFill);
 }
 topUp(w, m, b, c){
        this.water += w;
        this.milk += m;
        this.beans += b;
        this.cups += c;
        this.updateMenu()
        this.bank()
 }

    takeMoney(){
    console.log(`I gave you $${this.cash}`)
    this.cash = 0;
    }
}


const poorMachine = new CoffeeMachine(    400, 540, 120, 9, 550)




function CustomPrompt(){
	this.render = function(dialog,fctn){	
	var winW = window.innerWidth;
	var winH = window.innerHeight;	
	var dialogoverlay = document.getElementById('dialogoverlay');
	var dialogbox = document.getElementById('dialogbox');
	dialogoverlay.style.display = "block";
	dialogoverlay.style.height = winH+"px";
	dialogbox.style.left = (winW/2)-(560*.5)+"px";
	dialogbox.style.top = "5px";
	dialogbox.style.display = "block";
	document.getElementById('dialogboxhead').innerHTML = "Please Choose Type of Coffee";
	//document.getElementById('dialogboxbody').innerHTML = dialog;
	//document.getElementById('dialogboxbody').innerHTML +='<br><input id="prompt_value1"/>';
    document.getElementById('dialogboxbody').innerHTML =`<div class='prompt-choices'>
                                                    <div class='prompt-coffee-button'><button onclick="poorMachine.coffee('1')"><img src='./images/espresso.svg'></button><p>Espresso</p></div>
                                                     <div class='prompt-coffee-button'><button onclick="poorMachine.coffee('2')"><img src='./images/latte.svg'></button><p>Latte</p></div>
                                                     <div class='prompt-coffee-button'><button onclick="poorMachine.coffee('3')"><img src='./images/cappuccino.svg'></button><p>Cappucino</p></div>
                                                     </div>`
	document.getElementById('dialogboxfoot').innerHTML = '<button  class="fill green" onclick="poorMachine.start(`fill`)">Add Ingredients</button><button class="fill" onclick="promot.cancel()">Cancel</button>';	
                                                //<button onclick="promot.ok(\''+fctn+'\')">OK</button> 
	}
	this.cancel = function(){
		document.getElementById('dialogoverlay').style.display = "none";
		document.getElementById('dialogbox').style.display = "none";
	}
	this.ok = function(fctn){
		var prompt_value1 = document.getElementById('prompt_value1').value;
		window[fctn](prompt_value1);
		document.getElementById('dialogoverlay').style.display = "none";
		document.getElementById('dialogbox').style.display = "none";
	}
}
var promot = new CustomPrompt();

/*Geting Value*/
function changeText(val){ 
	document.getElementById('status').innerHTML = val;
	} 
function doStuff(val){ 
	document.body.style.background = val; 
	} 