// Basic Arctan Experiments UI Setup

window.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body');
    body.insertBefore(titlebar(), body.firstChild);
    makeButtonsUsable();
    initialize();
});

function titlebar() {
    const div = document.createElement('div');
    div.classList.add('tb');
    const title = document.createElement('span'); 
    title.classList.add('tb-title');
    title.innerText = document.querySelector("title").innerText;
    const close = document.createElement('button');
    close.classList.add('tb-close', 'tb-button');
    close.innerText = '✕';
    div.append(title);
    div.append(close);
    return div;
}

function makeButtonsUsable() {
    document.querySelector('.tb-close').addEventListener('click', () => {
        window.close();
    });
}

// Actual Program

let { Vector, Color } = require('arctan.meridian');
let { Paper } = require('arctan.paper');

let cvs;

function initialize() { // Start from within document body above to make sure you dont have any issues
    cvs = new Paper('.region', 600, 600, false);
    cvs.fillStyle = 'white';
    cvs.fillRect(35, 10, 10, 50);
    cvs.rotatePoint(50, 50);
    cvs.fillStyle = 'blue';
    cvs.fillRect(35, 10, 10, 50);

}