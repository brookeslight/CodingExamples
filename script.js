const canvas = document.querySelector('.Canvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(51, 84, 44)';
ctx.fillRect(25, 100, 10, 10);
