// Задача 66: Задайте значения M и N. Напишите программу, 
//   которая найдёт сумму натуральных элементов в промежутке от M до N.

// M = 1; N = 15 -> 120
// M = 4; N = 8. -> 30


let firstNum = +prompt("Задайте первое число")
let lastNum = +prompt("Задайте последнее число")

// Создал рекурсивную функцию с большой буквы
function CalcSumElement(start,end){
  let sum = 0;
  if(end == start){
    console.log(end)
    return start
  }
  
   sum += CalcSumElement(start, end - 1) + end
  console.log(sum)
  return sum
}
let startFunc = CalcSumElement(firstNum,lastNum);