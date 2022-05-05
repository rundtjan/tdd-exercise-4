class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  checkBoundaries(i){
    if (this.items[i].quality > 50) this.items[i].quality = 50;
    if (this.items[i].quality < 0) this.items[i].quality = 0;
  }

  updateBrie(i){
    if (this.items[i].sellIn > 0){
      this.items[i].quality++;
    } else {
      this.items[i].quality += 2;
    }
  }

  updateBackstagePass(i){
    if (this.items[i].sellIn < 0) this.items[i].quality = 0;
    else {
      if (this.items[i].sellIn < 5) {
        this.items[i].quality += 3;
      } else if (this.items[i].sellIn < 10) {
        this.items[i].quality+= 2;
      } else {
        this.items[i].quality++;
      }
    } 
  }

  updateStandard(i, factor){
    if (this.items[i].sellIn >= 0) {
      this.items[i].quality -= 1 * factor;
    } else {
      this.items[i].quality -= 2 * factor; 
    }
  }

  parseProduct(name){
    if (name.includes("Backstage pass")) return "Backstage pass";
    else return name;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") continue;
      this.items[i].sellIn--;
      let product = this.parseProduct(this.items[i].name);
      switch(product){
        case "Aged Brie":
          this.updateBrie(i);
          break;
        case "Backstage pass":
          this.updateBackstagePass(i);
          break;
        case "Conjured":
          this.updateStandard(i, 2);
          break;
        default:
          this.updateStandard(i, 1);
      }
      this.checkBoundaries(i);
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
