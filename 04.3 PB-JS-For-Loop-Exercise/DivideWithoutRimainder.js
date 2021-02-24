function divide(block){
    let n=block[0];
    let p1=0;
    let p2=0;
    let p3=0;
    
    for(let i=1; i<=n; i++){
        if(block[i]%2===0){
            p1++;
        }
        if(block[i]%3===0){
            p2++;
        }
        if(block[i]%4===0){
            p3++;
        }
    }
    p1=(p1/n)*100;
    p2=(p2/n)*100;
    p3=(p3/n)*100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);

}
divide(["3","3","6","9"]);
