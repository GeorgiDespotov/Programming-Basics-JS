function solve(budget,fiul,day){
    budget=Number(budget);
    fiul=Number(fiul);
    let moneySpend=0;
    if(day==='Saturday'){
       moneySpend=((fiul*2.10)+100)*0.90;
    } else if(day==='Sunday'){
        moneySpend=((fiul*2.10)+100)*0.80;
    }
    if(budget>=moneySpend){
        console.log(`Safari time! Money left: ${(budget-moneySpend).toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${(moneySpend-budget).toFixed(2)} lv.`);
    }

}
solve('1000',
    '10',
    'Sunday'
    )