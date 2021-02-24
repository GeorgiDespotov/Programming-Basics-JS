function fn(s, months){
    
    s = Number(s);
    months = Number(months);
    
    let simple = s;
    let complex = s;
    
    
    for(let i = 1; i <= months; i++){
        
        simple += 0.03 * s;
        complex += 0.027 * complex;
        
    }
    
    let difference = Math.abs(simple - complex);
    
    console.log(`Simple interest rate: ${simple.toFixed(2)} lv.`);
    console.log(`Complex interest rate: ${complex.toFixed(2)} lv.`);
    
    if(simple > complex){
        console.log(`Choose a simple interest rate. You will win ${difference.toFixed(2)} lv.`);
    } else {
        console.log(`Choose a complex interest rate. You will win ${difference.toFixed(2)} lv.`);
    }
    
   
}
solve('500','6')