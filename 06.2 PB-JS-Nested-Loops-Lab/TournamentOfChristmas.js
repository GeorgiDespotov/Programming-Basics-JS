function solve(input){
    let index=0;
    let days=input[index];
    index++;
    let allMoney=0;
    let winRate=0;
    let loseRate=0;
    for(let i = 1; i <= days; i++){
        let command=input[index];
        index++;
        let winCounter=0;
        let loseCounter=0;
        let moneySaved=0;
        while(command !== 'Finish'){
            let rate=input[index];
            index++;
            
            if(rate == 'win'){
               winCounter++;
               moneySaved+=20;
            } else if(rate == 'lose'){
                loseCounter++;
            }
            command=input[index];
            index++;
        }
        if(winCounter>loseCounter){
            moneySaved*=1.10;
            winRate++;
        } else {
            loseRate++;
        }
        allMoney+=moneySaved;
    }
    if(winRate>loseRate){
        allMoney*=1.20;
        console.log(`You won the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    }
}
solve([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ])
