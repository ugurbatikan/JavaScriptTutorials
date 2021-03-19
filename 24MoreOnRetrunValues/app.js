function square(x){
    return x * x;
    console.log('ALL DONE!');    
}

/* function isRed(color){
    if(color.toLowerCase() === 'red'){
        return true;
    }
    else{
        return false;
    }
} */
/* function isRed(color){
    if(color.toLowerCase() === 'red'){
        return true;
    }
       return false;
    
} */
function isRed(color){
    return color.toLowerCase() === 'red'
}

function containsPurple(arr){
    for(let color of arr){
        if( color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
}