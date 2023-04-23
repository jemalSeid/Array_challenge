// question #1
var array = [];

for(var i = 1;i<=5;i++)                                                           
{   
    
    var enterNum = prompt("Enter numbers");   
    array.push(enterNum);                              

}   

alert(array);       
var sum = 0;      
for(var j = 0; j< array.length; j++)     
{   
    sum += +array[j];   
}   
console.log(sum);

// question #2

function findMax(numbers) {
    let max = numbers[0];                      
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {                
            max = numbers[i];
        }
    }
    return max;                                
}

const randomNumbers = [14, 0, 6, 67, 48, 32, 20, 25, 99, 19];
console.log(findMax(randomNumbers));

// question #3

let newSentence = prompt("enter sentence")
let arrays = newSentence.split(' ');
console.log(arrays.length);

// question #4

const newNumber = [25, 6, 77, 84, 53,67,55,98,100,356];
const averageOfEachNum = newNumber.reduce((a, b) => a + b, 0) / newNumber.length;

console.log(averageOfEachNum);//output will be 92.1


//question #5


const findMultipleNum = [1,2,38,56,87,9,30,10,23,67,98];

const result = findMultipleNum.filter(num => num % 3 ===0 || num % 5 === 0);

console.log(result)


