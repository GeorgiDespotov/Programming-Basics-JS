function solve(){
    let result=0;
    for(let a=1; a<11; a++){
        for(let b=1; b<11; b++){
           result=a*b;
           console.log(`${a} * ${b} = ${result}`);
        }
    }
}
solve();