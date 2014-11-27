/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function Rectangle (left, top, width, height, stylesMap) {
    Shape.call(left, top, width, height, stylesMap);

    this.renderShape = function(canvasCtx) {
        return canvasCtx.fillRect(left, top, width, height, stylesMap);
    };
}

Rectangle.prototype = new Shape();

registerClassicalShape('Rectangle', Rectangle);


function Circle (left, top, width, height, stylesMap) {
    Shape.call(left, top, width, height, stylesMap);

    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(left, top, height, 0, 2*Math.PI, stylesMap);
        return canvasCtx.fill();
    };
}

Circle.prototype = new Shape();

registerClassicalShape('Circle', Circle);


function HelloWorld (left, top, width, height, stylesMap) {
    Shape.call(left, top, width, height, stylesMap);

    this.renderShape = function(canvasCtx) {
        canvasCtx.font = "20px Verdana";

        var gradient = canvasCtx.createLinearGradient(0,0, document.getElementById("shapes-canvas").width, 0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.25","red");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","green");

        canvasCtx.fillStyle = gradient;
        return canvasCtx.fillText("Hello World!", left, top);
    };
}

HelloWorld.prototype = new Shape();

registerClassicalShape('Hello World!', HelloWorld);