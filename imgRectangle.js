/*
Consider a function named topRightCorner that puts a rectangle of a 
specified color and size in the top right corner of the image. 
The function topRightCorner has six parameters named cornerWidth,
cornerHeight, someImage, red, green, and blue. This function replaces
the top right corner of the image someImage with a rectangle of height
cornerHeight and width cornerWidth, and color that has red, green and blue numeric values.

For example, the call result = topRightCorner(30, 60, picture, 255, 255, 0)
where picture is the simpleImage on the left below, followed by print(result) results in a yellow rectangle (all red and all green makes yellow) of width 30 and height 60  in the top right corner.
*/

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
var result2 = topRightCorner(60, 30, result, 0, 0, 255);
var result3 = topRightCorner(30, 30, result2, 0, 255, 0);
print(result3);
