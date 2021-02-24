function solve(input){
    let index=0;
    let days=Number(input[index]);
    index++;
    let sumWin=0;
    let sumLose=0;
    let moneySaved=0;
    for(let currentDay=1; currentDay<=days; currentDay++){
        let winRate=0;
        let loseRate=0;          
        let currentDayMoney=0;
        let command=input[index];
        index++;
        while(command !== 'Finish'){
            let result=input[index];
            index++;
            if(result === 'win'){
               currentDayMoney+=20;
               winRate++;
            } else {
              loseRate++;
            }
           command=input[index];
           index++;
        }
        if(winRate>loseRate){
            sumWin++;
            currentDayMoney*=1.10;  
        } else {
            sumLose++;
        }
        moneySaved+=currentDayMoney
    }
    if(sumWin>sumLose){
        moneySaved*=1.20;
        console.log(`You won the tournament! Total raised money: ${moneySaved.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneySaved.toFixed(2)}`);
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