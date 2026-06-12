const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
let y = 0;  
let vx = 6;
let vy = 7;
let gravity = 1;
function move() {
    ctx.clearRect(0, 0, 800, 800);
    
    if (x > 750 || x < 0) {
        vx = vx * -1;
    }
    if (y > 750 || y < 0) {
        vy = vy * -1;
    }
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(move);
}

move();
function handleKeyDown(e) {
    console.log(e.key);
    if (e.key == 'ArrowDown') {
        y += vy;
    } else if (e.key == 'ArrowUp') {
        y -= vy;
    } else if (e.key == 'ArrowRight') {
        x += vx;
    } else if (e.key == 'ArrowLeft') {
        x -= vx;
    }
}


document.addEventListener('keydown', handleKeyDown);
