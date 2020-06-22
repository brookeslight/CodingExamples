const canvas = document.querySelector('.Canvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
for(int i = 0; i < 10; i++) {
  ctx.fillRect(25+i, 100+i, 1, 1);
}
