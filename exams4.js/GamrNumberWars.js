function solve(input){
    let name1=input[0];
    let name2=input[1];
    let playerOneCarrd=Number(input[2]);
    
    let playerTwoCard=Number(input[3]);
    let index=4;
    
    points1=0;
    ponits2=0;
    isNumberWars=false;
    let result=0;
    while(playerOneCarrd !== 'End of game'){
        playerOneCarrd=Number(playerOneCarrd);
        playerTwoCard=Number(playerTwoCard);
        if((playerOneCarrd)>(playerTwoCard)){
           points1+=(playerOneCarrd-playerTwoCard);
        } else if(playerTwoCard>playerOneCarrd){
            ponits2+=(playerTwoCard-playerOneCarrd);
        } else {
            console.log(`Number wars!`);
            isNumberWars=true;
            playerOneCarrd=Number(input[index]);
            index++;
            playerTwoCard=Number(input[index]);
            if(playerOneCarrd>playerTwoCard){
                
                console.log(`${name1} is winner with ${points1} points`);
                break;
            } else {
                
                console.log(`${name2} is winner with ${ponits2} points`);
                break;
            }

        }
        playerOneCarrd=(input[index]);
        index++;
        playerTwoCard=(input[index]);
        index++;
    }
    if(!isNumberWars){
        console.log(`${name1} has ${points1} points`);
        console.log(`${name2} has ${ponits2} points`);
    }

}
solve(['Aleks',
'Georgi',
'4',
'5',
'3',
'2',
'4',
'3',
'4',
'4',
'5',
'2'

    ])