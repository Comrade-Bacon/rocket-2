// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "blank tile map":
            case "level2":return tiles.createTilemap(hex`0100010000`, img`
. 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "lvl4":
            case "level1":return tiles.createTilemap(hex`32001e00030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303010101010103030303030303030303030303030303030303030303020303030303030303030303030302030303030303030303030303010303030303030303030303030303030303030303030301010103030303030303030303030101030303030303030303030301010303010303030302030303030303030303030303010103010303030303030303030303030301030303030303030303030303030303030303010101010303030303030103030303030301010103030303030303030303030301010103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030203030303030303030303030303030303030301030303030303030303030303030301010101030303030303030303030201010101030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303010103030303030303010101030303010303030303030303030303030303030303030103030303030303030303030303030101030303030301030303030303030303030301010303030303030303030303030303030303030303030303030303030301010303030303030303030303030303030303030301030203030303030303030101020303030303030303030303030303010103030303030303030301010103030303030303030101010303030303030303030101010303030303030303030303030101030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303010101030303030303030301010303030303030303030303030303030303030303030303030303030303030103030303030303030101030303030303030303010303030303030301010101030303030303030303010103030303030303030303030303030303030303030303030303030303030303030303030303030103030303030303030303030303030301010303030303030302030303030301010303030303030303030303030303030303010101030303030101030303030303030303030303030301010103030303030303030303030303010101010103030303030303030303030301030303030303030203030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030301010103030101010303030303030303030303030101010303030303030303030303030303030303030303030203030303030303030303030303030303030303030303030303010303030303030303030301030303030303030303030101010103030303030303030303030303030303030303030302030101030303030303030303030303030303030303030303030303030303030303010101030303030303030303030303010101010103030303030203030303030303030303010101030303030303030303030301030303010303030303030303030303030303030303030303010103030301010103030303030303030303030303030303010103030303030103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302010101030303030303030303030303030303030303030303030303030303030303030101010103030303030303030303010101010103030303030303030301010101010103030302030303030303030303030303030303030303030303030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
..................................................
..................................................
..................................................
22222.............................................
....2......................222...........22.......
....22..2.................22.2.............2......
............2222......2......222............222...
..................................................
...................2..............2222...........2
222.............................................22
.......222...2..................2..............22.
....2...........22............................22..
.................2..........22...............22...
......222........222.........222............22....
..................................................
222........22..............................2......
..22.........2.......2222.........22..............
........................2...............22........
.....22.................222....22..............222
.............22222............2...................
.....................................222..222.....
.......222........................................
.......2..........2..........2222.................
......22..............................222.........
...22222................222...........2...2.......
.............22...222................22.....2.....
..................................................
222...............................2222..........22
222.........222222............................2222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "blankTile":
            case "tile3":return tile3;
            case "fuelSpawnTile":
            case "tile2":return tile2;
            case "rockTile":
            case "tile1":return tile1;
            case "fuelTile":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.