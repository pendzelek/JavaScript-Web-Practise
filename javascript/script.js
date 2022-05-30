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

 function analiza(){
    const text = document.getElementById("text").value;
    let tab = text.split(' ');
    console.log(tab);
    tab = tab.filter(a => String(a).trim());
    // ltrim() rtrim()
    console.log(tab);
    document.getElementById("result").innerHTML = tab.length;
 }

 function showMenu(){
     document.getElementById("nestedMenu").classList.toggle("show");
 }

 window.onclick = function(event) {
    if (!event.target.matches('.dropbtnJS')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentJS");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let flagMenu = false;
  function showNestedMenu(){
      console.log("log " + flagMenu);
      var btn = document.getElementById("dropdown-btn");
      var container = document.getElementById("dropdown-container")
    if(!flagMenu){
        flagMenu = true;
        btn.classList.toggle("active");
        container.style = "display:block;";
    }
    else{
        flagMenu = false;
        btn.classList.remove("active");
        container.style = "display:none;";
    }
  }
