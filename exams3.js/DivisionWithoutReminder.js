function solve(input){
    let index=0;
    let allNumbers=Number(input[index]);
    index++;
    let numb=1
    let p1=0;
    let p2=0;
    let p3=0;
    while(numb<=allNumbers){
        let num=Number(input[index]);  
        if(num % 2 === 0){
            p1++;
        }
        if(num % 3 === 0){
            p2++;
        }
        if(num % 4 === 0){
            p3++;
        }
        index++;
        numb++;
    }
    p1=(p1/allNumbers)*100;
    p2=(p2/allNumbers)*100;
    p3=(p3/allNumbers)*100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);


}
solve([
    '10',  '680', '2',
    '600', '200', '800',
    '799', '199', '46',
    '128', '65'
     ])