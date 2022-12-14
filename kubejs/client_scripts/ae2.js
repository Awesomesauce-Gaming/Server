// priority: 0
onEvent("jei.hide.items", function (event) {
  event.hide(/ae2:facade/);
});

onEvent("jei.add.items", function (event) {
  event.add(Item.of("ae2:facade", { item: "minecraft:stone" }));
});

onEvent("client.item_tooltip", function (event) {
  if (event.item.equals(Item.of("ae2:facade", { item: "minecraft:stone" }))) {
    event.add(
      text.yellow(
        "Facades are not disabled in this pack; just hidden in JEI. To craft facades, place the block you want to create a facade out of in the centre of the crafting grid (3x3) and four AE2 cable anchors on all adjacent sides of that block. If no output appears then you cannot create a facade with that block."
      )
    );
  }
});
