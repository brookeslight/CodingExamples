const canvas = document.querySelector('.Canvas');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(54, 81, 94)';
for(var i = 0; i < 10; i++) {
  ctx.fillRect(25+(10*i), 25+(10*i), 10, 10);
}
