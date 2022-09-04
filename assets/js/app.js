let cl = console.log;

// random numbers between two numbers

function numBtwnn(minnum, maxnum){
    let x = Math.round((Math.random() * (maxnum-minnum) + minnum));
    return x
}

cl(numBtwnn(5, 7))
cl(numBtwnn(105, 107))
cl(numBtwnn(10, 15))
