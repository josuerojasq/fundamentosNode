const sharp = require('sharp');

sharp('/home/josuerojasq/Development/fundamentosNode/src/paquetes/utiles/original.png')
    .resize(80)
    .grayscale()
    .toFile('/home/josuerojasq/Development/fundamentosNode/src/paquetes/utiles/resized.png');