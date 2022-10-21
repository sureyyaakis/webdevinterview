/* 
following is the best choice for the correct missing code to 
replace all the red values higher than 70 with 70? 
*/

for (var pixel of someImage.values()) {
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}
