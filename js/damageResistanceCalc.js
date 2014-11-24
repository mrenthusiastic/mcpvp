// JavaScript Document
var armorTypeResistance = 1;
var resistanceEnchant = 1;
var swordDamage = 1;

function swordDamage(swordType){
	swordDamage = swordType;
	damageResistance();
}

//Damage reduction from type of armour
function reducedDamageArmor(armorValue){
	armorTypeResistance = Math.round((1-(25-armorValue)/25)*100);
	damageResistance();
}

function reducedDamageEnchantment(epf){
	if(epf == 0){
		resistanceEnchant = 0;
	}
	var epfPercentage = Math.ceil(epf*(Math.floor(Math.random()*((100)-50+1)+50))/100);
	if(epfPercentage > 20){
		epfPercentage = 20;
	}
	resistanceEnchant = ((epfPercentage*4)/100);
	damageResistance();
}
//Minumum damage reduction from enchantment
function minReducedDamageEnchantment(epf){
	if(epf == 0){
		resistanceEnchant = 0;
	}
	var epfPercentage = Math.ceil(epf*50/100);
	if(epfPercentage > 20){
		var epfPercentage = 20;
	}
	resistanceEnchant = ((epfPercentage*4)/100);
	damageResistance();
}
//Maximum damage reduction from enchantment
function maxReducedDamageEnchantment(epf){
	if(epf == 0){
		resistanceEnchant = 0;
	}
	var epfPercentage = Math.ceil(epf*100/100);
	if(epfPercentage > 20){
		var epfPercentage = 20;
	}
	resistanceEnchant = ((epfPercentage*4)/100);
	damageResistance();
}
//Average damage reduction from enchantment
function averageReducedDamageEnchantment(epf){
	if(epf == 0){
		resistanceEnchant = 0;
	}
	var epfPercentage = Math.ceil(epf*75/100);
	if(epfPercentage > 20){
		var epfPercentage = 20;
	}
	resistanceEnchant = ((epfPercentage*4)/100);
	damageResistance();
}


function damageResistance() {
	if(resistanceEnchant == 1){
		resistanceEnchant = 0;
	}
	document.getElementById('damageresistance').innerHTML = Math.round((armorTypeResistance)+((100-armorTypeResistance)*resistanceEnchant))+"%";
}

