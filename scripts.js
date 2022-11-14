var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.width = '200';
canvas.height = '260';

canvas.addEventListener('mousemove', function(evt) {
    var rect = canvas.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    
    var img = new Image();
    img.src = 'img/cheese-slice.jpg';
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(20, 0, x, y);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#fec059';
    ctx.stroke();
    
}, false);