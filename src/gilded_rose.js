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

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items.quality === 0) {this.sellIn--; continue;} 
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") continue;
      if (this.items[i].name == "Aged Brie") {
        this.sellIn--;
        if (this.sellIn > 0){
          this.items[i].quality++;
        } else {
          this.items[i].quality += 2;
        }
        if (this.items[i].quality > 50) this.items[i].quality = 50;
        continue;
      }
      if (this.items[i].name.includes("Backstage pass")) {
        if (this.items[i].quality < 50) {
          this.items[i].quality++;
        }
        if (this.items[i].sellIn < 6 && this.items[i].quality < 49) {
          this.items[i].quality += 2;
        } else if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
          this.items[i].quality++;
        }
      } else {
        this.items[i].quality--;
      }

      this.items[i].sellIn--;
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name == "Aged Brie") {
          if (this.items[i].quality < 50) {
            this.items[i].quality++;
          }
        } else {
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            this.items[i].quality = 0;
          } else if (this.items[i].quality > 0) {
            this.items[i].quality--;
          }
        }
      }
      if (this.items[i].quality > 50 ) this.items[i].quality = 50;
      if (this.items[i].quality < 0) this.items[i].quality = 0;
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
