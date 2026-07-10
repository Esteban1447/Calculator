const btns = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const token = []

let expresion = "";
let number = ""

function calculator() {
    btns.forEach((element) => {
        element.addEventListener("click", () => {
            const value = element.textContent;
            

            if(value === "C"){
                expresion = ""
                display.value = expresion
            }else if(value === "="){
                console.log(expresion)


                token.length = 0;
                number = "";
                
                for (const character of expresion){
                if (!isNaN(character)){
                number += character
                }else{
                    token.push(number);
                    token.push(character);
                    number = ""
                }
                console.log(token)

        }
            if(number != ""){
                token.push(number)
            }
        
            }else{
                expresion += value;
                display.value = expresion;
            }

        });

        


    });
}

calculator();