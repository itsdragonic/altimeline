var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var preload = document.getElementById('preload');
var ctx2 = preload.getContext('2d');
var buffer = document.getElementById('buffer');
var ctx2 = buffer.getContext('2d');

/*  
    HIGH RES: 2560x1297
    MEDIUM RES: 1500x760
    LOW RES: 1000x507
*/

buffer.width = 2560;
buffer.height = 1297;

trackTransforms(ctx);

function clearCanvas() {
    var p1 = ctx.transformedPoint(0,0);
    var p2 = ctx.transformedPoint(canvas.width,canvas.height);
    ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);

    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.restore();
}

function redraw() {
    clearCanvas();
  
    // Draw Map
    ctx.drawImage(buffer, 0, 0, canvas.width, canvas.height);
  
    // Draw Text
    ctx.fillStyle = 'white';
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)';
  
    const nations = Object.keys(civs[timeline]).filter(nation => civs[timeline][nation].strength > 0);
  
    if (showNames) {
        for (let i = 0; i < nations.length; i++) {
            const nation = nations[i];
            const civ = civs[timeline][nation];

            ctx.font = (civ.size * 3 * canvas.width / buffer.width) + 'px carolingia';

            const scaledX = civ.x * 0.96 * canvas.width / buffer.width;
            const scaledY = civ.y * 1 * canvas.height / buffer.height;

            ctx.strokeText(civ.name, scaledX, scaledY);
            ctx.fillText(civ.name, scaledX, scaledY);
        }
    }
}  

var zoomAmount = 1;
window.onload = function() {	
    	
    redraw();

    var lastX=canvas.width/2, lastY=canvas.height/2;

    var dragStart,dragged;

    canvas.addEventListener('mousedown',function(evt) {
        document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragStart = ctx.transformedPoint(lastX,lastY);
        dragged = false;
    }, false);

    canvas.addEventListener('mousemove',function(evt) {
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragged = true;
        if (dragStart) {
            var pt = ctx.transformedPoint(lastX,lastY);
            ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
            redraw();
        }
    }, false);

    canvas.addEventListener('mouseup',function(evt) {
        dragStart = null;
        if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
    }, false);

    var scaleFactor = 1.1;

    var zoom = function(clicks) {
        //if (zoomAmount >= 0.3) {
        var pt = ctx.transformedPoint(lastX,lastY);
        ctx.translate(pt.x,pt.y);
        var factor = Math.pow(scaleFactor,clicks);
        ctx.scale(factor,factor);
        zoomAmount *= factor;
        if (zoomAmount > 0.5) {
            ctx.imageSmoothingEnabled = false;
        } else {
            ctx.imageSmoothingEnabled = true;
        }
        ctx.translate(-pt.x,-pt.y);
        redraw();
    }

    var handleScroll = function(evt) {
        var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
        if (zoomAmount < 0.3) {
            delta = Math.abs(delta);
        } else if (zoomAmount > 2000) {
            delta = -Math.abs(delta);
        }

        if (delta) zoom(delta);
        
        return evt.preventDefault() && false;
    };
  
    canvas.addEventListener('DOMMouseScroll',handleScroll,false);
    canvas.addEventListener('mousewheel',handleScroll,false);
};


// Adds ctx.getTransform() - returns an SVGMatrix
// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
function trackTransforms(ctx) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    var xform = svg.createSVGMatrix();
    ctx.getTransform = function() { return xform; };

    var savedTransforms = [];
    var save = ctx.save;
    ctx.save = function() {
        savedTransforms.push(xform.translate(0,0));
        return save.call(ctx);
    };
  
    var restore = ctx.restore;
    ctx.restore = function() {
        xform = savedTransforms.pop();
        return restore.call(ctx);
    };

    var scale = ctx.scale;
    ctx.scale = function(sx,sy) {
        xform = xform.scaleNonUniform(sx,sy);
        return scale.call(ctx,sx,sy);
    };
  
    var rotate = ctx.rotate;
    ctx.rotate = function(radians) {
        xform = xform.rotate(radians*180/Math.PI);
        return rotate.call(ctx,radians);
    };
  
    var translate = ctx.translate;
    ctx.translate = function(dx,dy) {
        xform = xform.translate(dx,dy);
        return translate.call(ctx,dx,dy);
    };
  
    var transform = ctx.transform;
    ctx.transform = function(a,b,c,d,e,f) {
        var m2 = svg.createSVGMatrix();
        m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
        xform = xform.multiply(m2);
        return transform.call(ctx,a,b,c,d,e,f);
    };
  
    var setTransform = ctx.setTransform;
    ctx.setTransform = function(a,b,c,d,e,f) {
        xform.a = a;
        xform.b = b;
        xform.c = c;
        xform.d = d;
        xform.e = e;
        xform.f = f;
        return setTransform.call(ctx,a,b,c,d,e,f);
    };
  
    var pt = svg.createSVGPoint();
    ctx.transformedPoint = function(x,y) {
        pt.x=x; pt.y=y;
        return pt.matrixTransform(xform.inverse());
    }
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
    let randomString = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

// Generate Random Seed Button
const generateSeedButton = document.getElementById('randomSeed');

generateSeedButton.addEventListener('mouseover', () => {
    generateSeedButton.title = 'Generate Random Seed';
});

generateSeedButton.addEventListener('click', () => {
    seedInput.value = generateRandomString();
    calcSeed(seedInput.value);

    fallback();
});

// Scale map
var scaleAmount = 1.5
window.addEventListener('resize', function() {
    const canvas = document.getElementById('main');
    canvas.width = window.innerWidth / scaleAmount;
    canvas.height = window.innerWidth / scaleAmount * 9 / 16;
});
window.dispatchEvent(new Event('resize'));

// Modal
document.getElementById('settingsButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});