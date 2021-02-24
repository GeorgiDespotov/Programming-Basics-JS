function solve(input){
    let index=0;
    let participants=Number(input[index]);
    index++;
    let maxPoints=Number.MIN_SAFE_INTEGER;
    let points=0;
    let chef='';
    let winner='';
    for( let contestent=1; contestent<=participants;contestent++){
        let command=input[index];
        index++;
        chef=command;
        let currentPoints=0;
        while(command !== 'Stop'){
            let nextPoints=Number(input[index]);
            currentPoints+=nextPoints;
            index++
            command=input[index];
        }
        console.log(`${chef} has ${currentPoints} points.`);
        points=currentPoints;
        if(points>maxPoints){
           maxPoints=points;
           winner=chef
           console.log(`${chef} is the new number 1!`);
        }
        index++;
    }
    console.log(`${winner} won competition with ${maxPoints} points!`);
}
solve([
    '2',         'Chef Angelov',
    '9',         '9',
    '9',         'Stop',
    'Chef Rowe', '10',
    '10',        '10',
    '10',        'Stop'
  ]
  )