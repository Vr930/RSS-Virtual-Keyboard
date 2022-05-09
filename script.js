let keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91,
     93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 1001, 1002,
      1003, 1004, 1005, 32, 1006, 1007, 1008, 1009, 46]; // charCode
 
     let arr = [];



const init = () => {
    let out = '';
for ( let i = 0; i < keyboard.length; i++) {
    if (keyboard[i] === 96) {
        out += ` <div class ="key" data ="`+keyboard[i]+`">` + `~` + `</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 13) {
        out += ` <div class ="key _enter" data ="`+keyboard[i]+`">ENTER</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1001) {
        out += ` <div class ="key _up" data ="`+keyboard[i]+`">&#8593;</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1002) {
        out += ` <div class ="key _shift" data ="`+keyboard[i]+`">SHIFT</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1003) {
        out += ` <div class ="key _ctrl" data ="`+keyboard[i]+`">Ctrl</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1004) {
        out += ` <div class ="key _ctrl" data ="`+keyboard[i]+`">Win</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1005) {
        out += ` <div class ="key _ctrl" data ="`+keyboard[i]+`">Alt</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 32) {
        out += ` <div class ="key _space" data ="`+keyboard[i]+`"></div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1006) {
        out += ` <div class ="key _ctrl" data ="`+keyboard[i]+`">Alt</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1007) {
        out += ` <div class ="key _up" data ="`+keyboard[i]+`">&#8592;</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1008) {
        out += ` <div class ="key _up" data ="`+keyboard[i]+`">&#8595;</div> `;
        keyboard.splice(i, 1);
    }
    if (keyboard[i] === 1009) {
        out += ` <div class ="key _up" data ="`+keyboard[i]+`">&#8594;</div> `;
        keyboard.splice(i, 1);
    }
    
   
    
    out += `<div class ="key" data ="`+keyboard[i]+`">`+ String.fromCharCode(keyboard[i]) + `</div> `;
    }
    document.querySelector('.keyboard').innerHTML = out;
   
}

init();



document.onkeypress = function (event) {
    arr.push(event.keyCode);
    console.log(event)
    document.querySelectorAll('.key').forEach(function (i) {
        i.classList.remove('_active');
    }) 

    document.querySelector('.key[data="'+event.keyCode+'"]').classList.add('_active');
   
}

////////////////////////////////////////////////////////KEYDOWN
document.onkeydown = function (event) {
    
}


document.querySelectorAll('.key').forEach(function (element) {
    element.onclick = function (event) {
        document.querySelectorAll('.key').forEach(function (i) {
            i.classList.remove('_active');
        });
        let code = this.getAttribute('data');
        this.classList.add('_active')
    }
}      
)

