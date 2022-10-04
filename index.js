import colors from "colors";

let num1 = +process.argv[2];
let num2 = +process.argv[3];
const numbers = [];
let noPrimeNumber = true;
let color = "red";

if (num1 > num2) {
  let num = num1;
  num1 = num2;
  num2 = num;
} // меняем местами переменные, если диапазон указан от большего к меньшему

if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
  console.log(
    colors.red(
      "Некорректные параметры. Введите 2 числа (можно указывать только натуральные числа или ноль)."
    )
  );
} else if (num1 <= num2) {
  for (let i = num1; i <= num2; i++) {
    if (i > 2) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          noPrimeNumber = false;
        }
      }
      if (noPrimeNumber === true) {
        numbers.push(i);
      }
    }
    if (noPrimeNumber === false) {
      noPrimeNumber = true;
    }
  }

  if (numbers.length === 0) {
    console.log(
      colors.red(`Простых чисел в диапазоне от ${num1} до ${num2} нет.`)
    );
  } else {
    console.log(`Простые числа в диапазоне от ${num1} до ${num2}:`);
    for (let i = 0; i < numbers.length; i++) {
      if (color === "green") {
        console.log(colors.yellow(numbers[i]));
        color = "yellow";
      } else if (color === "yellow") {
        console.log(colors.red(numbers[i]));
        color = "red";
      } else if (color === "red") {
        console.log(colors.green(numbers[i]));
        color = "green";
      }
    }
  }
}
