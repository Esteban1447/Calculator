const btns = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const token = [];

let expresion = "";
let number = "";
const operadores = ["+", "-", "*", "/"];

function calculator() {
  btns.forEach((element) => {
    element.addEventListener("click", () => {
      const value = element.textContent;
      const last = expresion.at(-1);

      if (value === "C") {
        expresion = "";
        display.value = expresion;
      } else if (value === "=") {
        console.log(expresion);
        token.length = 0;
        number = "";

        if (operadores.includes(last)) {
          return;
        }

        for (const character of expresion) {
          if (!isNaN(character) || character == ".") {
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
            }
            console.log(token);
          }
        }

        answerd = Number(token[0]);

        for (let i = 1; i < token.length; i += 2) {
          let operator = token[i];
          let number = Number(token[i + 1]);

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

        console.log(answerd);
        display.value = answerd;
      } else if (value === "⌫") {
        expresion = expresion.slice(0, expresion.length - 1);
        display.value = expresion;
      } else {
        console.log("Ultimo: " + last);

        if (expresion == "") {
          if (operadores.includes(value)) {
            return;
          }
        }

        if (operadores.includes(value) && operadores.includes(last)) {
          return;
        }

        // ------------------------------
        // VALIDAR PUNTOS DECIMALES
        // ------------------------------
        if (value === ".") {
          let numeroActual = "";

          // Vamos hacia atrás buscando el número actual
          for (let i = expresion.length - 1; i >= 0; i--) {
            let caracter = expresion[i];

            // Si encontramos un operador, paramos
            if (operadores.includes(caracter)) {
              break;
            }

            // Construimos el número actual
            numeroActual = caracter + numeroActual;
          }

          if (numeroActual.includes(".")) {
            return;
          }
        }

        expresion += value;
        display.value = expresion;
      }
    });
  });
}

calculator();
