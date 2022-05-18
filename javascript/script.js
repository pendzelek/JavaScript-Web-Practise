function turnOnTheLight(){
    document.getElementById("myImage").src='images/pic_bulbon.gif';
}

function turnOffTheLight(){
    document.getElementById("myImage").src='images/pic_bulboff.gif';
}

function changeStyle(){
     document.getElementById("Exercise_3").style.fontSize='35px';
     document.getElementById("Exercise_3").style.fontFamily='Arial'
}
let flag = true
function hideOrShow(){
    if(flag){
        flag = false;
        document.getElementById("Exercise_4").style.display='none';
    }
    else{
        flag = true;
        document.getElementById("Exercise_4").style.display='block';
    }
}

function printPage(){
    window.print();    
}

let flag_sw = true;
function ChangeBattalion(){
    if(flag_sw){
        flag_sw = false;
        document.getElementById("Battalion").src='images/212th_battalion.jpg';
        document.getElementById("Batton").innerHTML = "Change battalion: 212th battalion";
    }
    else{
        flag_sw = true;
        document.getElementById("Battalion").src='images/332nd_battalion.jpg';
        document.getElementById("Batton").innerHTML = "Change battalion: 332th battalion";
    }
 }


