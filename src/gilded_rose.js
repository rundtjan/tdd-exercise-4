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

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") continue;
      if (this.items.quality === 0) {this.sellIn--; continue;} 
      this.items[i].sellIn--;
      if (this.items[i].name == "Aged Brie") {
        if (this.sellIn > 0){
          this.items[i].quality++;
        } else {
          this.items[i].quality += 2;
        }
        this.checkBoundaries(i);
        continue;
      }
      if (this.items[i].name.includes("Backstage pass")) {
        if (this.items[i].sellIn >= 0){
          if (this.items[i].quality < 50) {
            this.items[i].quality++;
          }
          if (this.items[i].sellIn < 5 && this.items[i].quality < 49) {
            this.items[i].quality += 2;
          } else if (this.items[i].sellIn < 10 && this.items[i].quality < 50) {
            this.items[i].quality++;
          }
        } else {
          this.items[i].quality = 0;
        }
        continue;
      }
      if (this.items[i].sellIn >= 0) {
        this.items[i].quality--;
      } else {
        this.items[i].quality -= 2; 
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
