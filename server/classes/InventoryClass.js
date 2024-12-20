class Inventory {
  constructor(token) {
    this.token = token;
    this.foodInventory = [];
    this.Others = [];
  }

  addItemFood(newItemToInventory) {
    this.foodInventory.push(newItemToInventory);
  }

  addOtherItem(newItemToInventory) {
    this.Others.push(newItemToInventory);
  }
}

class foodItem {
  constructor(name, quantity, lvlItem, img) {
    this.name = name;
    this.img = img;
    this.quantity = quantity;
    this.lvlItem = lvlItem;
  }
}

class OtherItem {
  constructor(name, img, state) {
    this.name = name;
    this.img = img;
    this.state = state;
  }
}

export { Inventory };
