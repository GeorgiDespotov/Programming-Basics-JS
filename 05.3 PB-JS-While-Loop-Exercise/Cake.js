function solve(input){
    let cakeL=Number(input[0]);
    let cakeW=Number(input[1]);
    let cake=cakeL*cakeW;
    let index=2;
    let comand=input[index];
    let sum=0;
    let cakeLeft=cake;
    while(comand!=='STOP'){
        cakeLeft-=Number(comand);
       sum+=Number(comand);
       if(cakeLeft<=0){
          break;
       }
       index++;
       comand=input[index];
    }
    
    if(comand==='STOP'){
        console.log(`${cakeLeft} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${sum-cake} pieces more.`)
    }

}
solve(["10",
"2",
"2",
"4",
"6",
"STOP"])



