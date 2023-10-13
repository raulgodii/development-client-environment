function throwDice(){
    return Math.floor(Math.random()*(6)+1);
}

function timesNumber(res, n){
    sum = 0;
    for(let i=0; i<res.length; i++){
        if(n == res[i]){
            sum++;
        }
    }
    return sum;
}

res = [];

for(i=0; i<6000; i++){
    res.push(throwDice());
}

for(i=1; i<7; i++){
    document.write("<b>Numero de veces que ha salido " + i + ": </b>" + timesNumber(res, i) + "<br>");
}