// var box = document.querySelector('.box');
document.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {

    var randomZ = Math.floor(Math.random() * 98);

    var el = document.createElement('div');
    el.style.height = '30px';
    el.style.width = '30px';
    // el.textContent = 'FOLLOW ME!';
    // el.style.fontSize = '40px'; 
    el.style.position = 'absolute';
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    // el.style.backgroundColor = "rgb("+ e.clientX + "," + e.clientY + "," + randomZ  + ")";
    // el.style.backgroundColor = 'black';
    el.style.backgroundColor =  "rgb("+ e.clientY + "," + e.clientX + "," + randomZ  + ")";
    el.style.boxShadow = '0 0 10px ' + "rgb("+ e.clientY + "," + e.clientX + "," + randomZ  + ")";
    document.body.appendChild(el);
    // console.log('Coordinates: ', e.clientX, e.clientY);
}


