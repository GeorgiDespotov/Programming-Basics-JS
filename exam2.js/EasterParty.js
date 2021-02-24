function solve(guets,priceCov,budgeet){
    guets=Number(guets);
    priceCov=Number(priceCov);
    budgeet=Number(budgeet);
    let sum=0;
    if(guets<10){
        sum=guets*priceCov+(budgeet*0.1);
    } else if(guets>=10 && guets<=15){
        sum=guets*(priceCov*0.85)+(budgeet*0.1);
    } else if(guets>15 && guets<=20){
        sum=guets*(priceCov*0.80)+(budgeet*0.1)
    } else if(guets>20){
        sum=guets*(priceCov*0.75)+(budgeet*0.1)
    }
    if(budgeet>=sum){
        let moneyLeft=budgeet-sum;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded=sum-budgeet;
        console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`)
    }

}
solve('18','30','450')