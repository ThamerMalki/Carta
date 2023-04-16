const downloadLinks = document.querySelectorAll('[data-download]');
let s = document.getElementById('t1');
document.body.removeChild(s);

downloadLinks.forEach(element=>{

    const id = element.dataset.download;
    const inputID = element.dataset.input;
    const myInput = document.getElementById(inputID);
    const image = document.getElementById(id);
    const a = document.createElement("a");

    a.href = image.src;
    a.download='';
    a.style.display = 'none';

    element.addEventListener('click',function(){
        if(!myInput.value){
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        else
            draw(myInput.value,id);
    })
})



function draw(name, img) {

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id','idCanvas');
    canvas.setAttribute('style',"display: none;");
    canvas.setAttribute('width','1080');
    canvas.setAttribute('height','1080');

    document.body.appendChild(canvas);
    let context = canvas.getContext('2d');
    let imageObj = new Image();


    imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
    context.textAlign = "center";
    //context.font = "40px Alexandria";
    //context.fillText(name, 480, 980);
    
    switch(img){

        case '1':
            context.fillStyle = "white";
            context.font = "40px Aref Ruqaa";
            context.fillText(name, 550, 880);
            break;
        case '2':
            context.fillStyle = "black";
            context.font = "60px Aref Ruqaa";
            context.fillText(name, 550, 912);
            break;
        case '3':
            context.fillStyle = "#605b51";
            context.font = "50px Aref Ruqaa";
            context.fillText(name, 550, 730);
            break;
        case '4':
            context.fillStyle = "#6b6b6b";
            context.font = "40px Aref Ruqaa";
            context.fillText(name, 550, 920);
            break;   
           
        case '5':
            context.fillStyle = "#065067";
            context.font = "50px Aref Ruqaa";
            context.fillText(name, 560, 900);
            break;
        case '6':
            context.fillStyle = "#3A3A3A";
            context.font = "40px Aref Ruqaa";
            context.fillText(name, 550, 960);
            break;
        case '7':
            context.fillStyle = "#2d2d2d";
            context.font = "50px Aref Ruqaa";
            context.fillText(name, 570, 920);
            break;
        case '8':
            context.fillStyle = "#91722f";
            context.font = "50px Aref Ruqaa";
            context.fillText(name, 750, 820);
            break;
        case '9':
            context.fillStyle = "#2d2d2d";
            context.font = "40px Aref Ruqaa";
            context.fillText(name, 550, 980);
            break;
        default:
            context.fillStyle = "black";
            context.font = "40px Aref Ruqaa";
            context.fillText(name, 500, 912);
            break;
    }
    

    download();
    document.body.removeChild(canvas);

  }
    imageObj.src = `./images/${img}.jpg`; // TODO: need to change the image extention depends on the cards

};

let download = function(){
    let link = document.createElement('a');
    link.download = 'filename.jpg';
    link.href = document.getElementById('idCanvas').toDataURL()
    link.click();
  }
