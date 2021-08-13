var number ;
do {
    number = prompt('Please input a whole number');
    number = parseInt(number);
}while(!Number.isInteger(number));

isPrime(number);
function isPrime(n){
    if(n <= 1){
        console.log(n + ' is not a prime number!');
    }else if (n == 2){
        console.log(n + ' is a prime number!');
    }else{
        var i = 2;
        while(i < n && (n % i != 0)){
            i ++;
        }
        if(i == n){
            console.log(n + ' is a prime number!');
        }else{
            console.log(n + ' is not a prime number! It can be divided by ' + i + '.');
        }
    }
}