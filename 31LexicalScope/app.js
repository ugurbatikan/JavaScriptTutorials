/* function outer() {
  let hero = "Black Panther";

  function inner() {
    let cryForHelp = `${hero},please save me`
     console.log(cryForHelp);
  }
  inner(); // NOT DEFINED!
} */

/* function outer() {
  let hero = "Black Panther";

  function inner() {
    let hero = "Spiderman";
     console.log(hero);
  }
  inner(); // NOT DEFINED!
}
outer();//Spiderman */

function outer() {
  let hero = "Black Panther";

  function inner() {
    //let hero = "Spiderman";
    
    function extraInner() {
      console.log(hero);
    }
    extraInner();
  }


  inner(); // NOT DEFINED!
}


