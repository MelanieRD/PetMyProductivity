class item {
  constructor(name, desc, img, price, type, tryfield) {
    this.name = name;
    this.description = desc;
    this.img = img;
    this.price = price;
    this.quantity = 0;
    this.soldOut = false;
    this.itemLvl = 1;
    this.state = "active";
    this.type = type;
    this.tryfield = tryfield;
  }
}
