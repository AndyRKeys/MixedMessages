{
  //  create intial list of character names, classes and races
  const names = [
    "Akibrus",
    "Angun",
    "Balrus",
    "Bulruk",
    "Caldor",
    "Aleera",
    "Alva",
    "Amara",
    "Anya",
    "Asralyn",
    "Azura",
    "Ailmar",
    "Akkar",
    "Axil",
    "Belstram",
    "Alea",
    "Azariah",
    "Bellas",
    "Bonna",
    "Chandrelle",
    "Angor",
    "Austi",
    "Bragi",
    "Braka",
    "Amerstal",
    "Aqrilla",
    "Bellesta",
    "Bonnwynn",
  ];

  const classes = ["warrior", "paladin", "druid", "archer", "mage"];

  const races = ["human", "dwarf", "high elf", "dark elf", "goblin"];

  // create function to retreive a random item from a given array
  const getRandElement = (arr) => {
    //  get random number based on length of items in the array
    let i = Math.floor(Math.random() * arr.length);

    //  return that random element
    return arr[i];
  };

  //  object factory so can create multiple characters
  const characterFactory = (characterName, characterClass, characterRace) => {
    return {
      //  using "_" to indicate that these properites should not be directly changed, but should instead be accessed via getters/setters
      _characterName: characterName,
      _characterClass: characterClass,
      _characterRace: characterRace,

      //  getters/setters for each property
      get name() {
        return characterName;
      },

      set name(newName) {
        this._characterName = newName;
      },

      get class() {
        return _characterClass;
      },

      set class(newClass) {
        this._characterClass = newClass;
      },

      get race() {
        return _characterRace;
      },

      set race(newRace) {
        return "player cannot change race after setup";
      },

      //  function to retrieve current properties of the player
      listStats() {
        return `Name: ${this._characterName}, Class: ${this._characterClass}, Race: ${this._characterRace}`;
      },
    };
  };

  //  randomly generate a character based off the default arrays, e.g. if a player didn't want to choose for themselves
  function generateRandomCharacter() {
    return characterFactory(
      getRandElement(names),
      getRandElement(classes),
      getRandElement(races)
    );
  }

  //  create own character and an enemy to demo randomness
  let myCharacter = generateRandomCharacter();
  let enemyCharacter = generateRandomCharacter();

  //  print output to log
  console.log("My Character -  " + myCharacter.listStats());
  console.log("Enemy Character - " + enemyCharacter.listStats());
}
