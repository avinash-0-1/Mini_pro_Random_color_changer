const randomColor= function () {
    let hex = '123456789ABCDEF';
    let color='#';
    for(let i=0 ; i<6 ; i++){
        color+= hex[Math.floor(Math.random() * 16 + 1)]; 
        console.log(color);
    }
    return color;
}

let  change;

const changecolor = function () {
  
    const bg = function () {
        document.body.style.backgroundColor = randomColor();
    }
    
    if(change == null){
        change = setInterval(bg,500);
    }    
}

const stopchange = function(){
    clearInterval(change);
    change = null;
}

const st = document.getElementById('start').addEventListener('click', changecolor);
const sp = document.getElementById('stop').addEventListener('click',stopchange);
