// Basic Arctan Experiments UI Setup

let cvs;
let ctx;

window.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body');
    body.insertBefore(titlebar(), body.firstChild);
    makeButtonsUsable();
    cvs = document.querySelector('.region');
    ctx = cvs.getContext('2d');
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

function initialize() { // Start from within doc body above to make sure you dont have any issues
    
}