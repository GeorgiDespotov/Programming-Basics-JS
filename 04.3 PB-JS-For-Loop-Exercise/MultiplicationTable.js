function table(num){
    num=Number(num);
    for(let i=1; i<=10; i++){
        let result=i*num;
        console.log(`${i} * ${num} = ${result}`)
    }
}   
table(5)