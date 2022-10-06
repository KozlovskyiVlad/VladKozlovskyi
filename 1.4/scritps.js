/*let a;
function hide_js() {

    if (a == 1) {
        document.getElementsByClassName('blocks')[0].style.display = "flex";
        return a = 0;
    } else {
        document.getElementsByClassName('blocks')[0].style.display = "none";
        return a = 1;
    }
}

function hide_css_js() {
    document.getElementsByClassName("block3")[0].className = "block3_change";
}



function hide_all() {
    let values = document.querySelector('#userInput')
    if (a == 1) {
        document.getElementsByClassName(values.value)[0].style.display = "flex";
        return a = 0;
    } else {
        document.getElementsByClassName(values.value)[0].style.display = "none";
        return a = 1;
    }
}
document.querySelector('#userInput').addEventListener(onkeydown, block4_1);


function block4_1() {
    document.getElementById("block4").style.opacity = "0";
}
function block4() {

    document.getElementById("block4").style.opacity = "1";

}
let input
function open_URL() {
    input = document.querySelector('#userInput').value;
    draw();
    //document.getElementById("myImage").src = input;
}


function draw() {
    let lines = input.split(/\r\n|\n/);

    for (let i = 0; i < lines.length; i++) {
        let newFoto = document.createElement('img');
        newFoto.id= ''+i;
        
        document.body.appendChild(newFoto);
        document.getElementById(''+i).src= lines[i];   
    }
}

document.addEventListener('mouseover', function(e){
    let x = e.clientX;
    let y = e.clientY;
    

    document.getElementById('positions').innerHTML=
    ' X = '+ x + ","+ "Y = "+ y;
})

let lang = navigator.language;
document.getElementById('language').innerHTML='lang = '+lang;

let loc = navigator.geolocation.getCurrentPosition(function(position){
console.log(position);
document.getElementById('geoLoc').innerHTML='latitude = '+ position.coords.latitude+
', longitude = '+ position.coords.longitude; 
});
//Local Storage
let locStor = document.querySelector('#ls');
let textL;
locStor.addEventListener('input', letter => {
    console.log(letter.target.value)
    textL = letter.target.value;
    saveLocal();
})
document.getElementById('ls').innerHTML=localStorage.getItem('textInput')
const saveLocal = () => {
    localStorage.setItem('textInput', textL )
}

//Session Storage
let sesStor = document.querySelector('#ss');
let textS;
sesStor.addEventListener('input', letter => {
    console.log(letter.target.value)
    textS = letter.target.value;
    saveSession();
})
document.getElementById('ss').innerHTML=sessionStorage.getItem('textInput')
const saveSession = () => {
    sessionStorage.setItem('textInput', textS )
}

//Cookies
let cookStor = document.querySelector('#ck');
let textC;
cookStor.addEventListener('input', letter => {
    console.log(letter.target.value)
    textC = letter.target.value;
    saveCookies();
})
document.getElementById('ck').innerHTML=document.cookie;
const saveCookies = () => {
    document.cookie = textC;
}


document.getElementById('big').addEventListener('click', function() {
    alert('big div is here')
})
document.getElementById('small').addEventListener('click', function() {
    alert('small div is here to mzf')
})

//16
const btnOff = document.querySelector('#button_16');
const body = document.body;
let on_off = true; 

function disableScroll(){
    if (on_off) {
        body.classList.add('disable_scroll');
        on_off = false;
        document.getElementById('div_wall').style.display = "block";
    } else {
        body.classList.remove('disable_scroll');
        on_off = true;
        document.getElementById('div_wall').style.display = "none";
    }
    
}
btnOff.addEventListener('click', () => {
    disableScroll();
})*/

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }