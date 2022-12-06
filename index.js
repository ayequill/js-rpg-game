let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

const weapon = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "claw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];

const monster = [{
    name: "slime",
    level: 2,
    health: 15
    
},{
    name: "fanged beast",
    level: 8,
    health: 60
},{
    name: "dragon",
    level: 20,
    health: 300
}]
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight Dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "store" .',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 Health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You've entered the store! 😍",
  },
  {
    name: "cave",
    "button text": ["Fight Slime 🐍", "Fight fang Beast👹", "Goto town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You've entered the cave. A step closer to your death",
  },
  {
    name : "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "Youre fighting a monster"
  }
];
// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
function update(location) {
  button1.textContent = location["button text"][0];
  button2.textContent = location["button text"][1];
  button3.textContent = location["button text"][2];

  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];

  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}



function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.textContent = gold;
    healthText.textContent = health;
  } else {
    text.textContent = "You do not have enough gold to buy health";
  }
}

function buyWeapon() {
  if (currentWeapon < weapon.length - 1 ) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.textContent = gold;
      let newWeapon = weapon[currentWeapon].name;
      text.textContent = `You now have a new ${newWeapon}`;
      inventory.push(newWeapon);
      text.textContent += ` You have ${inventory} in your inventory`;
    } else {
      text.textContent = "You do not have enough gold to buy a weapon";
    }
  } else{
    text.textContent = "You already have the the most powerful weapon"
    button2.textContent = "Sell weapon for 15 gold"
    button2.onclick = sellWeapon
  }
}
function sellWeapon (){
    if (inventory.length > 1 ){
        gold += 15
        gold.textContent = gold
        let currentWeapon = inventory.shift()
        text.textContent = `You sold a ${currentWeapon}.`
        text.textContent += `In your inventory you have: ${inventory}`
}else {
    text.textContent = "Dont sell your only weapon"
}
}

function fightDragon() {
    fighting = 2
    goFight ()
}
function fightSlime() {
    fighting = 0
    goFight()
}

function fightBeast() {
    fighting = 1
    goFight()
}

function goFight(){

}
function attack (){

}
function dodge (){

}



