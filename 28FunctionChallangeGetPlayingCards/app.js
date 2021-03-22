// Write a getCard() function wich returns a random playing card object like;
//        {
//            value : 'K'
//            suit  : 'clubs'
//        }
// Pick a random value from:
// ---2,3,4,5,6,7,8,9,10,J,Q,K,A
// pick arandom suit from:
//---clubs,spades,hearts,diamonds
// retrun both in an object

/* function getCard(){
    const values = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'K',
        'Q',
        'A'
    ];
 const valIdx =   Math.floor(Math.random() * values.length);
 const value = values[valIdx];

    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds'];
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIdx];
    return {value: value, suit: suit};

} */
    function pick(arr){
        // return random element from arr
        const idx = Math.floor(Math.random() * arr.length);
        return arr[idx];
    }
function getCard(){
    const values = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'K',
        'Q',
        'A'
    ];
 //const value = pick(values);
    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds'];
   // const suit = pick(suits);   
    return {value: pick(values), suit: pick(suits)};
}