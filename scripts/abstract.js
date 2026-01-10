var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
var newsContainer = document.getElementById('newsContainer');

// Functions that are effectively "black boxes"

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
    let randomString = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

function changeColor(img, color) {
    const canvas1 = document.createElement('canvas');
    const ctx1 = canvas1.getContext('2d');
    canvas1.width = img.width;
    canvas1.height = img.height;

    ctx1.drawImage(img, 0, 0);

    // Get image data
    const imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const data = imageData.data;

    // Color to change
    const specificColor = { r: color[0], g: color[1], b: color[2], a: 255 };

    // Iterate through each pixel and replace
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (!((r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255) || a === 0)) {
            data[i] = specificColor.r;
            data[i + 1] = specificColor.g;
            data[i + 2] = specificColor.b;
            data[i + 3] = specificColor.a;
        }
    }

    ctx1.putImageData(imageData, 0, 0);
    return canvas1;
}

async function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null); // Resolve with null if the image fails to load
        img.src = src;
    });
}

function mergeCivs(img, x, y, id, color, img2, id2, showWhite, output) {
    const canvas1 = document.createElement('canvas');
    const ctx1 = canvas1.getContext('2d');

    let idx = id.x;
    let idy = id.y;
    if (x != undefined && y != undefined) {
        idx = x;
        idy = y;
    }

    // Calculate the minimum x and y values
    let xValue = Math.min(idx, id2.x);
    let yValue = Math.min(idy, id2.y);

    // Calculate the maximum x and y values
    const maxX = Math.max(idx + img.width, id2.x + img2.width);
    const maxY = Math.max(idy + img.height, id2.y + img2.height);

    // Calculate the required width and height for the canvas
    const canvasWidth = maxX - xValue;
    const canvasHeight = maxY - yValue;

    // Set the canvas width and height
    canvas1.width = canvasWidth;
    canvas1.height = canvasHeight;

    // Draw the first image at its respective position
    ctx1.drawImage(img, idx - xValue, idy - yValue);

    // Draw the second image at its respective position
    ctx1.drawImage(changeColor(img2, color), id2.x - xValue, id2.y - yValue);

    // Get image data
    const imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const data = imageData.data;

    // Iterate through each pixel and replace
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (r === 0 && g === 0 & b === 0 & a === 255) {
            if (showWhite || color == undefined || color == null || color == []) {
                data[i] = 255;
                data[i + 1] = 255;
                data[i + 2] = 255;
                data[i + 3] = 255;
            } else {
                data[i] = color[0];
                data[i + 1] = color[1];
                data[i + 2] = color[2];
                data[i + 3] = 255;
            }
        }
    }

    ctx1.putImageData(imageData, 0, 0);
    switch (output) {
        case 0:
            return canvas1;
            break;
        case 1:
            return xValue;
            break;
        case 2:
            return yValue;
            break;
    }
}

function drawOutline(ctx2, img, x, y) {
    const canvas1 = document.createElement('canvas');
    const ctx1 = canvas1.getContext('2d');
    canvas1.width = img.width;
    canvas1.height = img.height;

    ctx1.drawImage(img, 0, 0);

    // Get image data
    const imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const data = imageData.data;

    // Iterate through each pixel and replace
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Outline border
        if (!(r === 0 && g === 0 && b === 0 && a === 255) && a != 0) {
            const left = (i % (canvas1.width * 4) !== 0) ? data[i - 4 + 3] === 0 : true;
            const right = ((i + 4) % (canvas1.width * 4) !== 0) ? data[i + 4 + 3] === 0 : true;
            const up = (i >= canvas1.width * 4) ? data[i - canvas1.width * 4 + 3] === 0 : true;
            const down = (i < data.length - canvas1.width * 4) ? data[i + canvas1.width * 4 + 3] === 0 : true;
            const topLeft = (i % (canvas1.width * 4) !== 0 && i >= canvas1.width * 4) ? data[i - canvas1.width * 4 - 4 + 3] === 0 : true;
            const topRight = ((i + 4) % (canvas1.width * 4) !== 0 && i >= canvas1.width * 4) ? data[i - canvas1.width * 4 + 4 + 3] === 0 : true;
            const bottomLeft = (i % (canvas1.width * 4) !== 0 && i < data.length - canvas1.width * 4) ? data[i + canvas1.width * 4 - 4 + 3] === 0 : true;
            const bottomRight = ((i + 4) % (canvas1.width * 4) !== 0 && i < data.length - canvas1.width * 4) ? data[i + canvas1.width * 4 + 4 + 3] === 0 : true;

            if (left || right || up || down || topLeft || topRight || bottomLeft || bottomRight) {
                data[i] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;
                data[i + 3] = 255;
            }
        }
    }

    ctx1.putImageData(imageData, 0, 0);
    ctx2.drawImage(canvas1, x, y);
}

String.prototype.hashCode = function () {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function stringToNumbers(inputString) {
    // Check if the input is a number
    if (!isNaN(inputString)) {
        return Number(inputString);
    }

    // If the input is a string, compute its hash code
    return inputString.hashCode();
}

function frontItem(array, phraseToMove) {
    const index = array.indexOf(phraseToMove);

    if (index !== -1) {
        array.splice(index, 1);
        array.push(phraseToMove);
    }
}

function endItem(arr, phrase) {
    const index = arr.indexOf(phrase);

    if (index !== -1) {
        arr.splice(index, 1);
        arr.unshift(phrase);
    }
    return arr;
}

function grabData(url, val1, val2) {
    if (url.includes(val1)) {
        let foo = url.split(val1);

        let foo1 = foo[1];
        foo2 = foo1.split(val2);

        return foo2[0]
    } else return 0;
}

function makeDraggable(element) {
    let isDragging = false;
    let startX, startY, offsetX, offsetY;

    element.addEventListener('mousedown', startDrag);
    element.addEventListener('touchstart', startDrag);

    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    function startDrag(event) {
        event.preventDefault();
        isDragging = true;
        if (event.type === 'mousedown') {
            startX = event.clientX;
            startY = event.clientY;
        } else if (event.type === 'touchstart') {
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
        }
        offsetX = element.offsetLeft - startX;
        offsetY = element.offsetTop - startY;
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);
        element.style.cursor = 'grabbing';
    }

    function endDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        element.style.cursor = 'pointer';
    }

    function drag(event) {
        if (!isDragging) return;
        event.preventDefault();
        let x, y;
        if (event.type === 'mousemove') {
            x = event.clientX + offsetX;
            y = event.clientY + offsetY;
        } else if (event.type === 'touchmove') {
            x = event.touches[0].clientX + offsetX;
            y = event.touches[0].clientY + offsetY;
        }
        element.style.left = x + 'px';
        element.style.top = y + 'px';
    }
}