var height = someImage.getHeight();
for (var pixel of someImage.values()) {
    if (pixel.getY() >= height - 10) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
