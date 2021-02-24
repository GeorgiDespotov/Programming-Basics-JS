function cleverLily(age,washinMachinePr,toyPr){
    age=Number(age);
    washinMachinePr=Number(washinMachinePr);
    toyPr=Number(toyPr);
    let sumToys=0;
    let birthdayMoney=0;
    let lastCashGift=0;
    for(let i=1; i<=age; i++){
        if(i%2 !==0){
            sumToys+=1;
        } else {
            birthdayMoney+=lastCashGift+9;
            lastCashGift+=10;
        }
    }
    let toysMoney=toyPr*sumToys;
    let totalMoney=toysMoney+birthdayMoney;
    let moneyLeft=Math.abs(totalMoney-washinMachinePr);
    if(totalMoney>=washinMachinePr){
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        console.log(`No! ${moneyLeft.toFixed(2)}`);
    }
}
cleverLily(21,1570.98,3);