function solve(moneySum,gender,age,sport){
    moneySum=Number(moneySum);
    let sum=0;
    if(gender=='m'){
        switch(sport){
            case 'Gym':sum=42;break;
            case 'Boxing':sum=41;break;
            case 'Yoga':sum=45;break;
            case 'Zumba':sum=34;break;
            case 'Dances':sum=51;break;
            case 'Pilates':sum=39;break;

        }
    } else if(gender=='f'){
        switch(sport){
            case 'Gym':sum=35;break;
            case 'Boxing':sum=37;break;
            case 'Yoga':sum=42;break;
            case 'Zumba':sum=31;break;
            case 'Dances':sum=53;break;
            case 'Pilates':sum=37;break;

        }
    }
    if(age<=19){
        sum*=0.8;
    }
    if(moneySum>=sum){
        
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else{
        let moneyLeft=sum-moneySum;
        console.log(`You don't have enough money! You need $${moneyLeft.toFixed(2)} more.`)
    }
}
solve(31,'m',19,'Gym')