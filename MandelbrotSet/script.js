const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;


const Complex = function (re, im) {
    this.re = re; // the real part of the complex number
    this.im = im; // the imaginary part of the complex number

    // add another complex number and return the result
    this.add = (c) => {
        return new Complex(this.re + c.re, this.im + c.im);
    }

    // multiply another complex number and return the result
    this.mul = (c) => {
        return new Complex(this.re * c.re - this.im * c.im, this.re * c.im + this.im * c.re);
    }

    // return the absolute value of this complex number
    this.abs = () => {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    }
};



// This function computes the mandelbrot set
// z = z^2 + c
// where z is a complex number and c is a constant
// c is the point in the complex plane that we are testing
// iterations is the number of times we are allowed to iterate

function mandelbrot(c, iterations) {
    // initialize the complex number z to 0
    let z = new Complex(0, 0);

    // iterate up to the number of times specified
    for (let i = 0; i < iterations; i++) {

        // z = z * z + c
        z = z.mul(z).add(c);

        // if |z| > 2, the sequence is diverging
        if (z.abs() > 2) {
            return i;
        }
    }
    // if |z| is never > 2, return iterations
    return iterations
}



// This function creates a color gradient based on the number of iterations required to escape from the Mandelbrot set.
function draw(StartX, StartY, EndX, EndY, iterations) {
    // Calculate the step size of the x and y intervals
    const stepX = (EndX - StartX) / width;
    const stepY = (EndY - StartY) / height;

    // Loop through each pixel in the canvas
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            // Calculate the complex number corresponding to the pixel
            let c = new Complex(StartX + x * stepX, StartY + y * stepY);
            // Calculate the number of iterations required to escape from the Mandelbrot set
            let i = mandelbrot(c, iterations);
            // Set the pixel color based on the number of iterations required to escape
            ctx.fillStyle = `hsl(${i * 360 / iterations}, 100%, 50%)`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}


// The starting coordinates of the top left corner of the grid
let startX = -2; //the starting x position
let startY = -2; //the starting y position

draw(startX, startY, startX + 4, startY + 4, 100); //draws a line from the starting position to the starting position plus 4 in both directions, with 100 iterations per pixel
