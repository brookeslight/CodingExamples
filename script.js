const canvas = document.querySelector('.Canvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(54, 81, 94)';
for(var i = 0; i < 10; i++) {
  ctx.fillRect(25+(10*i), 25+(10*i), 10, 10);
}
