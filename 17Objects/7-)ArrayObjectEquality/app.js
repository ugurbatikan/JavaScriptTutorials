// Array Object Equality
let nums = [1,2,3];
let digits = [1,2,3];
// look the same , but refer to different arrays
// nums == digits --> false
// nums === digits --> false
let moreNums = nums;
// two arrays reference the exact same array, so we ge true
// nums == moreNums --> true
// nums === moreNums --> true

const user = {
    username : 'UgurBatikan',
    email : 'batikanugur@hotmail.com',
    notifications : ['message']
};
// if (user.notifications == []) --> false --> its not equal to empty array.
if(!user.notifications.length){
    console.log('NO NEW NOTIFICATIONS!');
}

// {} === {} --> false
// {a:1} === {a:1} --> false
let data1 = {a:1};
let data2 = data1;
// data1 === data2 --> true
