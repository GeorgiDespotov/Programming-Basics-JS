function solve(input){
    index=0;
    let moneyNeeded=Number(input[index]);
    index++;
    let money=Number(input[index]);
    index++;
    let comand=input[index];
    index++;
    let dayMoney=Number(input[index])
    let moneySaved=0;
    let spendCount=0;
    let days=0;
    while(money<moneyNeeded){
        days++;
        if(comand==='spend'){
            money=(money-dayMoney);
            if(money<0){
                money=0;
            }
            spendCount++;
        }
        if(comand==='save'){
            money+=dayMoney;
            spendCount=0;
        }
        if(spendCount===5){
            break;
        }
        index++;
        comand=input[index];
        index++;
        dayMoney=Number(input[index]);
    }
    if(spendCount>=5){
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`)
    }

}
solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


