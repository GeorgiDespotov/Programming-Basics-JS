function solve(input){
    let goal=10000;
    let sumwalks=0;
    let index=0;
    let walks=input[index];
    
    while(walks!=='Going home'&&index<input.length){
        sumwalks+=Number(walks);
        
        index++;
        walks=input[index];
    }
    if(walks==='Going home'){
        sumwalks+=Number(input[index+1]);
    }
    if(sumwalks>=goal){
        
        console.log(`Goal reached! Good job!`)
        console.log(`${sumwalks-goal} steps over the goal!`);
    } else {
        
        console.log(`${goal-sumwalks} more steps to reach goal.`)
    }
}
solve(["1000",
"1500",
"2000",
"6500"])



