// Write a function to find the avarage value i an array numbers
//avg ([0,50]) // 25
//avg ([75,76,80,95,100]) // 85.2

function avg (arr){
    total = 0;
     //loop over each num
    for(let num of arr){
        //add them together
        total += num;
    }
    //divide by number of nums
    return total / arr.length;
    
} 