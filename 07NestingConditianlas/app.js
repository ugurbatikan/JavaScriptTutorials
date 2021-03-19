let password = "hellokitty";

if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log('Valid Password!');
    }else{
        console.log('Password is long enough but, but can not contain spaces');
    }
}
else{
    console.log('Password must be longer');
}