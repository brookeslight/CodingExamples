const canvas = document.querySelector('.Canvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
