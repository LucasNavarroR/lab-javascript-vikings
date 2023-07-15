// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    this.name = name;
  }
  receiveDamage = (damage) => {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };

  battleCry = () => {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = (Viking) => {
    this.vikingArmy.push(Viking);

    for (let i = this.vikingArmy; i < 10; this.vikingArmy.push(Viking)) {}
  };
  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon);
  };

  vikingAttack = () => {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let choosenSaxon = this.saxonArmy[randomSaxon];
    let randomViking = Math.floor(Math.random() * this.saxonArmy.length);
    let choosenViking = this.vikingArmy[randomViking];

    let result = choosenSaxon.receiveDamage(choosenViking.strength);

    if (choosenSaxon.health <= 0) {
      this.saxonArmy.splice([choosenSaxon], 1);
    }
    return result;
  };
  saxonAttack = () => {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let choosenSaxon = this.saxonArmy[randomSaxon];
    let randomViking = Math.floor(Math.random() * this.saxonArmy.length);
    let choosenViking = this.vikingArmy[randomViking];

    let result = choosenViking.receiveDamage(choosenSaxon.strength);

    if (choosenViking.health <= 0) {
      this.vikingArmy.splice([choosenViking], 1);
    }
    return result;
  };

  /*
  BONUS ITERATION 5

  attackPhase = () => {
  let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let choosenSaxon = this.saxonArmy[randomSaxon];
  let randomViking = Math.floor(Math.random() * this.saxonArmy.length);
  let choosenViking = this.vikingArmy[randomViking];

  let attackOrder = Math.floor(Math.random() * 7); // Dice

  if (attackOrder <= 3) {
    vikingAttack = (choosenSaxon, choosenViking) => {
      let result = choosenSaxon.receiveDamage(choosenViking.strength);

      if (choosenSaxon.health <= 0) {
        this.saxonArmy.splice([choosenSaxon], 1);
      }
      return result;
    };
  } else {
    saxonAttack = (choosenSaxon, choosenViking) => {
      let result = choosenViking.receiveDamage(choosenSaxon.strength);

      if (choosenViking.health <= 0) {
        this.vikingArmy.splice([choosenViking], 1);
      }
      return result;
    };
  }
};

  
  
  
  */
  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
