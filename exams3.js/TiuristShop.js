function solve(input){
    let index=0;
    let budget=Number(input[index]);
    index++;
    let command=input[index];
    index++;
    let nextBuy=Number(input[index]);
    index++;
    let buyCounter=1;
    let isBrouk=false;
    let total=0;
    while(command !== 'Stop'){
        if(buyCounter % 3 === 0){
            nextBuy*=0.5;
        }
        total+=nextBuy;
        if(budget<=total){
            isBrouk=true;
            break;
        }
        command=input[index];
        index++;
        if(command !== 'Stop'){
            buyCounter++;
        }
        nextBuy=Number(input[index]);
        index++
    }
    if(isBrouk){
        console.log(`You don't have enough money!`);
        console.log(`You need ${(total-budget).toFixed(2)} leva!`);
    } else {
        console.log(`You bought ${buyCounter} products for ${total.toFixed(2)} leva.`);
    }

}
solve(['153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglasses',
    '30',
    'Stop'
    
    
    ])