function solve(input){
    let index=0;
    let h=Number(input[index]);
    index++;
    let l=Number(input[index]);
    index++;
    let pr=Number(input[index]);
    index++;
    let noPaintSpace=(h*l*4)*(pr/100);
    let paintSpace=Math.ceil((h*l*4)-noPaintSpace);
    let command=input[index];
    index++;
    while(command !== 'Tired!' && index<=input.length){
        let kv=Number(command);
        paintSpace=Math.abs(paintSpace-kv)
        if(paintSpace===0){
            console.log(`All walls are painted! Great job, Pesho!`);
            break;

        }
        command=input[index];
        index++;
    }
    if(command === 'Tired!'){
        console.log(`${paintSpace} quadratic m left.`)
    } else if(paintSpace !==0){

        console.log(`All walls are painted and you have ${paintSpace} l paint left!`)
    }
    
}
solve([ '2', '3', '25', '6', '7', '8' ]

)