//*Defining HTML Elements*//
var display = document.getElementById("display");
var itemSlot = document.getElementById("itemSlot");
var coinReturn = document.getElementById("coinReturn");
var coinAccum = document.getElementsByClassName("coin")

//*Defining Initial Values*//
var escrowValue = 0.00;
var coinReturnValue = 0.00;
var lowChange = false;
var defaultMessage = "Insert Coin";

//*Item Objects*//
var kombucha = {
  cost: 3.50,
  stock: 3,
  displayName: "Kombucha"
};
var chips = {
  cost: 1.50,
  stock: 3,
  displayName: "Chips"
};
var candy = {
  cost: 1.00,
  stock: 3,
  displayName: "Candy"
};

//*Values of Coins by Weight*//
var pennyValue = 0.01, nickelValue = 0.05, dimeValue = 0.10, quarterValue = 0.25, dollarValue = 1.00;

//*Initial Display Values*//
display.innerHTML = defaultMessage;
coinReturn.innerHTML = coinReturnValue;
itemSlot.innerHTML = "";
stockDisplay.innerHTML = ("Machine Stock - " + "Kombucha: " + kombucha.stock + " Chips: " + chips.stock + " Candy: " + chips.stock);

function coinInsert(value){
	var coinWeight = value;
	if(itemSlot.innerHTML == ""){
		if(coinWeight == 2){
			coinReturnValue += pennyValue;

		}	else if(coinWeight == 1){
			escrowValue += dimeValue;

		}	else if(coinWeight == 3){
			escrowValue += nickelValue;

		}else if(coinWeight == 4){
			escrowValue += quarterValue;

		}else if (coinWeight == 8) {
      escrowValue += dollarValue;
    }
		updateDisplays();
	}
}

function updateDisplays(){
	coinReturnValueDisplay = coinReturnValue.toFixed(2);
	escrowValueDisplay = escrowValue.toFixed(2);

	if(itemSlot.innerHTML == ""){
		if(escrowValue != 0.00){
			display.innerHTML = escrowValueDisplay;
		}
		else{
			display.innerHTML = defaultMessage;
		}
	}
	else{
		display.innerHTML = "THANK YOU";
	}
	coinReturn.innerHTML = coinReturnValueDisplay;
}

function buyItem(item){
	if(itemSlot.innerHTML == ""){
		if(item.stock > 0){
			if(escrowValue >= item.cost){
				escrowValue -= item.cost;
				item.stock--;
				itemSlot.innerHTML = item.displayName;
				updateStock();
				makeChange();
			}
			else{
				priceShow(item.cost.toFixed(2));
			}
		}
		else{
			soldOut();
		}
	}
}

function updateStock(){
	stockDisplay.innerHTML = ("Machine Stock - " + "Kombucha: " + kom.stock + " Chips: " + chips.stock + " Candy: " + candy.stock);
}

function makeChange(){
	coinReturnValue += escrowValue;
	escrowValue = 0.00;
	updateDisplays();
}

function priceShow(cost){
	display.innerHTML = ("PRICE: " + cost);
}

function collectItem(){
	itemSlot.innerHTML = "";
	updateDisplays();
}

function soldOut(){
	display.innerHTML = "SOLD OUT";
}

function collectCoins(){
	coinReturnValue = 0.00;
	updateDisplays();
}

function lowCoinCheck(){
	lowChange = !lowChange;
	if(lowChange == true){
		defaultMessage = "Exact Change Only";
	}
	else{
		defaultMessage = "Insert Coin";
	}
	updateDisplays();
}
