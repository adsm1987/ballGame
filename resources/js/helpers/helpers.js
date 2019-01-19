//This function check is the number is prime
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }

//This function initializes howler with a coin sound
var soundCoin = new Howl({
  src: ['./resources/sounds/coin.mp3'],
  html5: true
});

//This function initializes howler with a kick sound
var soundKick = new Howl({
  src: ['./resources/sounds/kick.wav'],
  html5: true
});