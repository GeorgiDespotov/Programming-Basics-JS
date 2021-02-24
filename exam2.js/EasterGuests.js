function solve(guests,budget){
    guests=Number(guests);
    budget=Number(budget);
    let numKoz=(Math.ceil(guests/3))
    let kozPrice=numKoz*4;
    let numEggs=guests*2
    let eggsPrice=numEggs*0.45;
    let sum=kozPrice+eggsPrice;
    if(budget>=sum){
        let moneyLeft=budget-sum;
        console.log(`Lyubo bought ${numKoz} Easter bread and ${numEggs} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        let moneyNeeded=sum-budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`)
    }
}
solve('10','35')
