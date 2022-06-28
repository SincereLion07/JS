/* //1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let step;
for (let i = 1; i < 11; i++){
  step = 2 ** i;
}
console.log(step) */

/* //1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function step (n,i){
    return n ** i;
}
let result = step(2,10);
console.log(result); */

/* // 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let result = " ";
for (let i = 0; i < 5; i++){
  result += ":)";
  console.log(result);
} */

/* //2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
  let result = " ";
for (let i = 0; i < 5; i++){
  result += stroka;
  console.log(result);
 }
}
printSmile(":)", 5) */

//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'

// version 1

console.log(getWordStructure('case')); //2
console.log(getWordStructure('Case')); //2
console.log(getWordStructure('Check-list')); //2

function getWordStructure(word){
  const lowerCaseWord = word.replace(/[^A-Z0-9]/ig, "").toLowerCase(); /* this function removes any space,
  special character and then makes a string of lowercase */
  let count = 0; //counter
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; 
  for (let char of lowerCaseWord){ //symbol of string
     if (vowels.includes(char)){
      count ++;
    }
  } 
  return `${word} includes : ${count} volwes and ${lowerCaseWord.length - count}cosonants`; 

}


//version 2

function getWordStructure(word){
  const vowels = 'aeiouy'.split('');
  const consonant = 'bcdfghjklmnpqrstvwxyz'.split('');
  
  let vowelsCount = 0;
  let consonantCount = 0;
  for (const char of word.toLowerCase()){
    if (vowels.includes(char)) vowelsCount++
    else if (consonant.includes(char)) consonantCount++
  }
  console.log(`${word} includes : ${vowelsCount} volwes and ${consonantCount}cosonants`)
}
getWordStructure("Check-list")



//4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word).
//Проверки: 'abba', 'Abba'

function isPalindrom(word){
  const lowerCaseWord = word.replace(/[^A-Z0-9]/ig, "").toLowerCase(); /* this function removes any space, 
  special character and then makes a string of lowercase */
  return lowerCaseWord === lowerCaseWord.split('').reverse().join(''); /*this function will split the input, 
  reverse and join the reversed string characters*/
}
console.log(isPalindrom('abba'));
console.log(isPalindrom('Abba'));
console.log(isPalindrom('А роза упала на лапу Азора'));
console.log(isPalindrom('Не видно, как он дивен'));
console.log(isPalindrom('People')); 




