function divisible9(a,b){
    a=Number(a);
    b=Number(b);
    let sum=0;
    for(let i=a; i<=b; i++){
        if(i%9===0){
            sum+=i;
        }
    }
    console.log(`The sum: ${sum}`);
    for(let i=a; i<=b; i++){
        if(i%9===0){
            console.log(i);
        }
    }
}
divisible9(100,200)