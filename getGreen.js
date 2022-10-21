/* 
Repeat steps for each pixel

@ Start with the foreground image you want (fglmage)
@ And with the background image you want (bglmage)
@ Make a blank image of the same size (output)
@ Estee a inal fence zis D a is green,
  1. look at the currentPixel and if its green, 
    + Look at same position in bglmage
    + And set output’s corresponding pixel to bglmage’s pixel
  2. Otherwise: set output’s corresponding pixel 
*/

for (var oixel of img.values()) 
{
  var newG = 255 - pixel.getGreen();
pixel.setGreen(newG);
  
}

