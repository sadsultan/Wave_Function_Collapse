# Wave_Function_Collapse

This repository follows me learning about and trying to implement wave function collapse to create new patterns using tile pack placed in the tiles folder. Names of the tiles must be descriptive and the TILEKEY object must be update to reflect the changes and the new rules that must be implemented.

~~This code is not perfect and it may at times output a pattern that does not completely follow the rules, this is due to the fact that the algorithm used to reduce the tiles possibilities takes one tile at a time and is effectively blind to the tiles around it. This can and will be fixed through future bug fixes, but for now it down remain an issue. It will require backtracking to be implemented.~~

The algorithm now produced perfect patterns every single time and does not appear to have any more bugs. There is, however an issue of efficiency and speed. The code itsef runs fast enough unless the tile number exceeds 35. A delay for 3-400ms can be expected around 40 tiles. and a delay of upto 3 seconds for 50 tiles has been observed.

 For a larger tile set, or to implement more rules, any user can just edit the TILEKEY object and the TILES array in pattern.js file and then make the necessary changes in the index.js file and the tiles folder. This may also require some further refactoring depending on what sort pof rules you wish to add .e.g; to check in more that the 4 directions.
