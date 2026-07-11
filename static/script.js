const btns = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const token = [];

let expresion = "";
let number = "";

function calculator() {
  btns.forEach((element) => {
    element.addEventListener("click", () => {
      const value = element.textContent;

      if (value === "C") {
        expresion = "";
        display.value = expresion;
      } else if (value === "=") {
        console.log(expresion);
        token.length = 0;
        number = "";

        for (const character of expresion) {
          if (!isNaN(character)) {
            number += character;
          } else {
            token.push(number);
            token.push(character);
            number = "";
          }
        }

        if (number != "") {
          token.push(number);
        }

        console.log(token);

        let answerd = Number(token[0]);

        for (let i = 1; i < token.length; i += 2) {
          let number1 = token[i - 1];
          let operator = token[i];
          let number2 = token[i + 1];

          if (operator == "*" || operator == "/") {
            switch (operator) {
              case "*":
                answerd = number1 * number2;
                token.splice(i - 1, 3, answerd);
                i -= 2;
                break;
              case "/":
                console.log("Entre a la division");
                answerd = number1 / number2;
                token.splice(i - 1, 3, answerd);
                i -= 2;
                break;
              default:
                break;
            }
            console.log(token);
          }
        }
        answerd = Number(token[0]);

        for (let i = 1; i < token.length; i += 2) {
          let operator = token[i];
          let number = Number(token[i + 1]);

          console.log(operator);
          console.log(number);

          switch (operator) {
            case "+":
              answerd = number + answerd;
              break;
            case "-":
              answerd = answerd - number;
              break;
            default:
              answerd = "No se pudo resolver";
              break;
          }
        }

        // let number1 = Number(token[0]);
        // let number2 = Number(token[2]);
        // let operator = String(token[1])
        // let answerd = 0;

        // console.log(token[1])
        // console.log(token[2]);
        // console.log(operator);
        // console.log(number2 + number1);
        // console.log(number1);

        // switch (operator) {
        //   case "+":
        //     answerd = number1 + number2;
        //     break
        //   case "-":
        //     answerd = number1 - number2;
        //     break
        //   case "/":
        //     answerd = number1 / number2;
        //     break
        //   case "*":
        //     answerd = number1 * number2;
        //     break
        //   default:
        //     answerd = "No se pudo resolver";
        //     break
        // }

        console.log(answerd);
        display.value = answerd;
      } else {
        expresion += value;
        display.value = expresion;
      }
    });
  });
}

calculator();
