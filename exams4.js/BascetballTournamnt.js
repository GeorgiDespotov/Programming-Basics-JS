function solve(input){
    let index=0;
    let command=input[index];
    index++;
    let winRate=0;
    let loseRate=0;
    let gamesCounter=0
    
    while(command !== 'End of tournaments'){
        let match=command;
        let allGames=Number(input[index]);
        index++;
        for(let game=1; game<=allGames;game++){
            gamesCounter++;
            let resultA=0;
            let resultB=0;
            let result=0;
            let currentResult=Number(input[index]);
            index++;
            resultA+=currentResult;
            currentResult=Number(input[index]);
            index++;
            resultB+=currentResult;
            if(resultA > resultB){
                result=resultA-resultB;
                winRate++;
                console.log(`Game ${game} of tournament ${match}: win with ${result} points.`);
            } else if(resultB > resultA){
                result=resultB-resultA;
                loseRate++;
                console.log(`Game ${game} of tournament ${match}: lost with ${result} points.`);
            }
        }
        command=input[index];
        index++;
    }
    let pWin=(winRate/gamesCounter)*100;
    let pLose=(loseRate/gamesCounter)*100;
    console.log(`${pWin.toFixed(2)}% matches win`);
    console.log(`${pLose.toFixed(2)}% matches lost`);

}
solve([
    'Ballers',            '3',
    '87',                 '63',
    '56',                 '65',
    '75',                 '64',
    'Sharks',             '4',
    '64',                 '76',
    '65',                 '86',
    '68',                 '99',
    '45',                 '78',
    'End of tournaments', ''
  ]
  
  )