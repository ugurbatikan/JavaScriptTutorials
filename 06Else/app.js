let userScore = 2100;
let highScore = 3000;

if(userScore >= highScore){
    console.log('Congrats, you have the new score of ${userScore}');
    highScore = userScore;
}else{
    console.log('Good Game. Your score of ${userScore} did not beat the highScore of ${highScore}');
}