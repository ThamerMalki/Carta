let personName = "";
const downloadLinks = document.querySelectorAll('[data-download]');

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
            draw(myInput.value);
    })
})



function draw(name) {

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id','idCanvas');
    canvas.setAttribute('style',"display: none;");
    canvas.setAttribute('width','1080');
    canvas.setAttribute('height','1080');

    console.log(canvas);

    document.body.appendChild(canvas);
    //let canvas = document.getElementById('idCanvas');
    let context = canvas.getContext('2d');

    let imageObj = new Image();


    imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
    context.font = "40px Calibri";
    context.fillStyle = "white";
    context.fillText(name, 500, 912);

    //canvas = document.getElementById('idCanvas');
    let dataURL = canvas.toDataURL();
    console.log(dataURL);
    download();
    document.body.removeChild(canvas);

  }
imageObj.setAttribute('crossOrigin', 'anonymous');
imageObj.src = "./images/card.png";

};

let download = function(){
    let link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('idCanvas').toDataURL()
    link.click();
    console.log(link);
  }
