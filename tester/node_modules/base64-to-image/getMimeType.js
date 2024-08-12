// Function to determine MIME type based on base64 string prefix
const getMimeType = (base64String) => {
    // Define prefixes for different image types
    const imageTypes = {
        '/9j/': 'image/jpeg', // JPEG also means jpg
        'iVBORw0KGgo': 'image/png', // PNG
        'R0lGODlh': 'image/gif', // GIF (GIF89a)
        'R0lGODdh': 'image/gif', // GIF (GIF87a)
        'UklGR': 'image/webp', // WebP (starts with 'UklGR')        
        'Qk1': 'image/bmp', // BMP
        'PHN2Zy': 'image/svg+xml', // SVG
        'SUkq': 'image/tiff', // TIFF
        'AAAAGG': 'image/heic' // HEIC (base64 starting example)
    };

    // Check the base64 string for each image type prefix
    for (const [prefix, mimeType] of Object.entries(imageTypes)) {
        if (base64String.startsWith(prefix)) {
            return mimeType;
        } 
    }

    // Default to JPEG if unknown
    return 'intoelse';
};

module.exports = getMimeType;