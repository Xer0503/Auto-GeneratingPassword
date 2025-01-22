const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const result1 = document.querySelector(`#result1`);
const result2 = document.querySelector(`#result2`);
function generatePassword(){

    let generatePassword1 = ``;
    let generatePassword2 = ``;

    let LValue = getValue();
    console.log(LValue)

    if (LValue === ``) {
        for(let i = 0; i < 10; i++){
            generatePassword1 += characters[Math.floor(Math.random() * characters.length)];
        }
        for(let i = 0; i < 10; i++){
            generatePassword2 += characters[Math.floor(Math.random() * characters.length)];
        }  
    }else{
        for(let i = 0; i < LValue; i++){
            generatePassword1 += characters[Math.floor(Math.random() * characters.length)];
        }
        for(let i = 0; i < LValue; i++){
            generatePassword2 += characters[Math.floor(Math.random() * characters.length)];
        }
    }

    result1.textContent = generatePassword1;
    result2.textContent = generatePassword2;
    document.querySelector(".input-length").value = ``;
}

function getValue(){
    let inputLength = document.querySelector(".input-length");
    let inputValue = inputLength.value;
    return inputValue
}