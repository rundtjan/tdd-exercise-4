var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  it("If no Items are entered into the shop, the items list is empty", function () {
    const gildedRose = new Shop();
    expect(gildedRose.items.length).to.equal(0);
  });

  it("If item is given name foo, the name should be foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  
  it(`If the name of the item is not Aged Brie, Backstage passes to a TAFKAL80ETC
      concert or Sulfuras, Hand of Ragnaros, and has a quality value of 0, 
      update quality will not change the quality value.`, function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it(`If the name of the item is not Aged Brie, Backstage passes to a TAFKAL80ETC
      concert or Sulfuras, Hand of Ragnaros, and has a quality value above zero, and a sellIn-value of 0, 
      update quality will lower quality by one.`, function () {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it(`If the name of the item is not Aged Brie, Backstage passes to a TAFKAL80ETC
      concert or Sulfuras, Hand of Ragnaros, and has a quality value above 1, 
      update quality will lower quality by two.`, function () {
    const gildedRose = new Shop([new Item("foo", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
    });

  it(`If the name of the item is not Aged Brie, Backstage passes to a TAFKAL80ETC
      concert or Sulfuras, Hand of Ragnaros, and has a quality value above 1 and a
      selling value above zero, update quality will lower quality by one.`, function () {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it(`If the name of the item is Sulfuras, Hand of Ragnaros, and has a quality value above 0, 
      update quality will not lower quality by one.`, function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });


  it(`If the name of the item is Sulfuras, Hand of Ragnaros, and has a quality value above 0
      and a negative sellin-value, update quality will not lower quality by one.
      `, function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it(`If the name of the item is Aged Brie and has a quality value less than 50, 
      update quality will add 2 to quality`, function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  it(`If the name of the item is Aged Brie and has a quality value at 50 or more, 
      update quality will not change the quality value`, function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value less than 50, and a sellIn of 0, update quality will reduce quality 
      value to zero`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value less than 50, but a sellin value above 0, 
      update quality will add 3 to quality value`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value less than 50, but a sellin value of above 5, 
      update quality will add 2 to quality value`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value less than 50, but a sellin value of above 10, 
      update quality will add 1 to quality value`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value of 50 or more, and a sellin value of 0,
      update quality will reset the quality value to zero`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value of 48, and a sellin value between 0 and 6,
      update quality will add two to the value`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value of 49, and a sellin value between 0 and 6,
      update quality will add one to the value`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it(`If the name of the item is Backstage passes to a TAFKAL80ETC concert and 
      has a quality value of 50 or more, and a sellin value of 1 or more,
      update quality will not change the quality value`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it(`If the name of the item is not Sulfuras, Hand of Ragnaros, its sellin value will
      be reduced by one`, function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
  });

  it(`If the name of the item is Sulfuras, Hand of Ragnaros, its sellin value will
      not be reduced by one`, function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(1);
  });

  it(`If the name of the item is Conjured, and it's sellin-value is above 0, its quality value will
      be reduced by two`, function () {
    const gildedRose = new Shop([new Item("Conjured", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(48);
  });

  it(`If the name of the item is Conjured, and it's sellin-value is under 0, its quality value will
      be reduced by four`, function () {
    const gildedRose = new Shop([new Item("Conjured", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(46);
  });

  it("The quality of brie increases by 1 before sellIn is zero", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  })

});
