//For Loops & Arrays

// Try to write array elements
const animals = [ 'lions', 'tigers', 'bears', 'monkeys'];
for(let i = 0; i < animals.length; i++){
    console.log(i , animals[i]);
} 

// Write lessons name and grades
const myGrades = [
    {
    name : 'Phisycs',
    grade : 45
},
{
    name : 'Math',
    grade : 88
},
{
    name : 'Biology',
    grade : 65
},
{
    name : 'Religion',
    grade : 98
}
];
for(let i = 0; i < myGrades.length; i++){
    let grades = myGrades[i];
    console.log(`${grades.name} scored--> ${grades.grade}`);

}

// Reverse Words
const word = 'stressed';
let reverseWords = '';
for (let i = word.length -1 ; i >= 0; i--){
    reverseWords += word[i];
}
console.log(reverseWords);

// Write avarage of my grades

const mathGrades = [
    {
        Examgrade : 45
    },
    {
        Examgrade : 56
    },
    {
        Examgrade : 98
    },
    {
        Examgrade : 23
    }
];
let total = 0;
for(let i = 0 ; i < mathGrades.length; i++){
let exams = mathGrades[i];
total += exams.Examgrade;

}
let avarageExams = total / mathGrades.length;
if( avarageExams >= 55){
    console.log('Your Avarage--> ' + avarageExams + 'SUCCESS!');
}else{
    console.log('Your Avarage--> ' + avarageExams + 'FAILURE!')
}
 