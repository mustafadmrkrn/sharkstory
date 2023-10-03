// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`18001000020202010101010101010101010101010101010201010101040101010101010101010101010101010101010202020202010101010201010202020202020202010101010101010101010101010201010101010205010101010101010101010101010101010201010101010201010101010101020202020201010101010205010101010201010201010101010105020101010101020202020101010201010201010101010101010101010101010102010101010201010202010101010101010101010101010102010101010201010202010101020202010101010101010102010101010201010201010101020501010101010102010101010101010201010101010101020101010103010202010101010101010201010101010101020101010202020201010101010202020201010101010101020101010101040101010102020501010101010102020202020101010101040101020202010101010101010101010101010101010101020202020101010101010101010101030301010101010101`, img`
222................2....
...................22222
....2..22222222.........
....2.....2.............
....2.....2.......22222.
....2.....2..2.......2..
...2222...2..2..........
.....2....2..22.........
.....2....2..22...222...
.....2....2..2....2.....
..2.......2.......2.....
.22.......2.......2...22
22.....2222.......2.....
.....22.......22222.....
...222..................
2222....................
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorOpenEast,sprites.castle.tileDarkGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
