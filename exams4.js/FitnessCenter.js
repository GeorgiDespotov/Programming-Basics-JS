function solve(input){
    let allCustomers=Number(input[0]);
    let backCounter=0;
    let chestCounter=0;
    let legsounteer=0;
    let adsCounter=0;
    let prSh=0;
    let prB=0;
    let traning=0;
    let eating=0;
    for(let persone=1;persone<=allCustomers;persone++){
        if(input[persone]==='Back'){
            backCounter++;
            traning++;
        } else if(input[persone]==='Chest'){
            chestCounter++;
            traning++;
        } else if(input[persone]==='Legs'){
            legsounteer++;
            traning++;
        } else if(input[persone]==='Abs'){
            adsCounter++;
            traning++;
        } else if(input[persone]==='Protein shake'){
            prSh++;
            eating++;
        } else if(input[persone]==='Protein bar'){
            prB++;
            eating++;
        }
    }
    let prTraning=(traning/allCustomers)*100;
    let prEating=(eating/allCustomers)*100;

    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsounteer} - legs`);
    console.log(`${adsCounter} - abs`);
    console.log(`${prSh} - protein shake`);
    console.log(`${prB} - protein bar`);
    console.log(`${prTraning.toFixed(2)}% - work out`);
    console.log(`${prEating.toFixed(2)}% - protein`);


}
solve([
    '10',          'Back',
    'Chest',       'Legs',
    'Abs',         'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs',         ''
  ]
  )