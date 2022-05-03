var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  it("If item is given name foo, the name should be foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("If the name of the item is not Aged Brie, Backstage passes to a TAFKAL80ETC concert or Sulfuras, Hand of Ragnaros, and has a quality value above 0, update quality will lower quality by one.", function () {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("If the name of the item is not Aged Brie, Backstage passes to a TAFKAL80ETC concert but it is Sulfuras, Hand of Ragnaros, and has a quality value above 0, update quality will not lower quality by one.", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it("If the name of the item is not Aged Brie, Backstage passes to a TAFKAL80ETC concert but it is Sulfuras, Hand of Ragnaros, and has a quality value of 0, update quality will not lower quality by one.", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("If the name of the item is Aged Brie and has a quality value less than 50, update quality will add 2 to quality", function (){
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  })
});
