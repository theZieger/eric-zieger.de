const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const basePath = path.join(__dirname, '../public/images');
const imageSizes = [591, 719, 303, 389, 473]

fs.readdir(basePath, function (err, files) {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    if (!fs.existsSync(basePath + '/optimized')){
        fs.mkdirSync(basePath + '/optimized');
    }

    files.forEach(function (file) {
        const filePath = path.parse(file)
        const pathToFile = basePath + '/' + file;

        if (filePath.ext === '.jpg') {
            imageSizes.forEach(function (size) {
                if (!fs.existsSync(basePath + '/optimized/' + size)){
                    fs.mkdirSync(basePath + '/optimized/' + size);
                }

                sharp(pathToFile)
                    .resize(size)
                    .webp({ quality: 75 })
                    .toFile(basePath + '/optimized/' + size + '/' + filePath.name + '.webp', (err) => {
                        if (err) console.error(err)
                    });
            });
        }
    });
});