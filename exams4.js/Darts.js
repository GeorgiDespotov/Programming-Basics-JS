function solve(input){
    let index=0;
    let name=input[index];
    index++;
    let command=input[index];
    index++;
    let points=301;
    let sucsesShot=0;
    let loseShot=0;

    while(command !=='Retire' && points !== 0){
        let nextShot=Number(input[index]);
        index++;
        if(command==='Triple'){
            nextShot*=3;
            points-=nextShot;
            if(points>=0){
                sucsesShot++;
            } else {
                loseShot++;
                points+=(nextShot);
            }
        } else if(command==='Double'){
            nextShot*=2;
            points-=nextShot;
            if(points>=0){
                sucsesShot++;
            } else {
                loseShot++;
                points+=(nextShot);
            }
        } else if(command==='Single'){
            nextShot*=1;
            points-=nextShot;
            if(points>=0){
                sucsesShot++;
            } else {
                loseShot++;
                points+=nextShot;
            }
        }
        command=input[index];
        index++;    
    }
    if(command === 'Retire'){
        console.log(`${name} retired after ${loseShot} unsuccessful shots.`);
    } else if(points === 0){
        console.log(`${name} won the leg with ${sucsesShot} shots.`);
    }

}
solve(['Rob Cross',
'Triple',
'20',
'Triple',
'20',
'Triple',
'20',
'Triple',
'20',
'Double',
'20',
'Triple',
'20',
'Double',
'5',
'Triple',
'10',
'Double',
'6',
'Retire'


    ])