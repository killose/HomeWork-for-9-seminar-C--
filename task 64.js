// Задача 64: Задайте значение N. Напишите программу,
//  которая выведет все натуральные числа в промежутке от N до 1.
//  Выполнить с помощью рекурсии.

// N = 5 -> "5, 4, 3, 2, 1"
// N = 8 -> "8, 7, 6, 5, 4, 3, 2, 1"

let N = +prompt("Задайте число")

// Создал рекурсивную функцию с большой буквы
function PrintNumbers(num,finish){
  if(num === finish){
    return num
  }
  return PrintNumbers(num,finish+1) + ", " + finish
}
let startFunction = PrintNumbers(N,1)
console.log(startFunction)