function solve(input){
    let name=input[0];
    let allMatches=Number(input[1]);
    let index=2
    let wRate=0;
    let lRate=0;
    let dRate=0;
    let points=0;
    let isFaild=false;
    if(allMatches === 0 ){
       isFaild=true;
       console.log(`${name} hasn't played any games during this season.`);
       
    }
    for(let i=1;i<=allMatches;i++){
        let score=input[index];
        index++;
        if(score === 'W'){
           wRate++;
           points+=3;
        } else if(score === 'D'){
            dRate++;
            points+=1;
        } else {
            lRate++;
        }
    }
    if(!isFaild){
        console.log(`${name} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wRate}`);
        console.log(`## D: ${dRate}`);
        console.log(`## L: ${lRate}`);
        console.log(`Win rate: ${((wRate/allMatches)*100).toFixed(2)}%`);
    }

}
solve([ 'Chelsea', '0' ]
)