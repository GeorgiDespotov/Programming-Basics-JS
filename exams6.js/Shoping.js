function solve(budget,video,proc,ram){
    budget=Number(budget);
    video=Number(video);
    proc=Number(proc);
    ram=Number(ram);

    let moneyV=video*250;
    let moneyP=proc*(moneyV*0.35);
    let moneyR=ram*(moneyV*0.1);
    let totalMoney=moneyP+moneyR+moneyV;

    if(video>proc){
        totalMoney*=0.85;
    }
    if(budget>=totalMoney){
        console.log(`You have ${(budget-totalMoney).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalMoney-budget).toFixed(2)} leva more!`);
    }
}
solve('900','2','1','3')