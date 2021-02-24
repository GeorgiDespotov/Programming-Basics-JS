function solve(input){
    let goal=10000;
    let index=0;
    let walks=(input[index]);
    let sumwalks=0;
    while(index<input.length){
        sumwalks+=Number(walks);
        if(walks==='Going home'){
            sumwalks+=Number(input[index+1]);
        }
        index++;
        walks=Number(input[index]);
    }
    
    if(sumwalks>=goal){
        sumwalks-=goal;
        console.log(`Goal reached! Good job!`)
        console.log(`${sumwalks} steps over the goal!`);
    } else {
        goal-=sumwalks
        console.log(`${goal} more steps to reach goal.`)
    }
}
solve(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

