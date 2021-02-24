function solve(input){
    index=0;
    let badGrade=Number(input[index]);
    index++;
    let taskName=input[index];
    index++;
    let grade=Number(input[index]);
    let lastTask=''; 
    let sumBadGrade=0;
    let sumGrdaes=0;
    let sumTasks=0;
    
    while(taskName!=='Enough'){
        sumGrdaes+=grade;
        sumTasks++;
        if(grade<=4){
            sumBadGrade++;
        }
        if(sumBadGrade===badGrade){
            break;    
        }
        lastTask=taskName;
        index++;
        taskName=input[index];
        index++;
        grade=Number(input[index]);

    }
    if(taskName==='Enough'){
        console.log(`Average score: ${(sumGrdaes/sumTasks).toFixed(2)}`);
        console.log(`Number of problems: ${sumTasks}`);
        console.log(`Last problem: ${lastTask}`)
    } else {
        console.log(`You need a break, ${sumBadGrade} poor grades.`);
    }
      
}
solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

