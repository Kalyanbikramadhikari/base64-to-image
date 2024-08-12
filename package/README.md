# Base64 to image converter 🚀🚀🚀

![Version](https://img.shields.io/badge/version-1.0-blue)
![Install Size](https://img.shields.io/badge/Install_Size-2.2KB-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![Status](https://img.shields.io/badge/status-optimized-brightgreen)



This **optimized Base64 to image converter** allows you to seamlessly convert Base64-encoded image strings into image URLs.

With this tool, you can store the converted image data directly in your local state, eliminating the need to save images to specific directories or paths. This approach is both **efficient** and **straightforward, reducing file management overhead**.





## Installation
Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
  npm i base64code-to-image
```

## Usage/Examples

```javascript
const base64toimage = require('base64code-to-image')

const test = () => {
    const base64code = 'PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cueG1sbnMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJyZWQiIC8+Cjwvc3ZnPg=='    
    console.log(base64toimage(base64code))

}

test();
}
```
    
## Features
This package is able to handle following type of images:

- **jpeg**
- **png**
- **gif**
- **webp**
- **bpm**
- **svg+ xml**
- **heic**
- **tiff**


## FAQ

#### Do I need to store the converted ImageURL into some directory ?

**No.** You can just store converted ImageURL locally in some varaible like const or var or react useState and use it when needed.

#### Will using this package increase optimization ?

**Yes.** Since the converted image is not stored in some directory, this helps in optimization of both storage and run time efficiency.


## Contributing
This project welcomes all constructive contributions. Contributions take many forms, from code for bug fixes to enhancements to additions.





## Author

- [@kalyanbikramadhikari](https://github.com/Kalyanbikramadhikari/)





