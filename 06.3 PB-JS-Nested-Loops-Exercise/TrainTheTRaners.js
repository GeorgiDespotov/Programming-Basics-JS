function solve(input){
    let index=0;
    let jury=Number(input[index]);
    index++;
    let project=input[index];
    index++;
    let totalScore=0;
    let numberExams=0;
    while(project !== 'Finish'){
        let score=0;
        for(let grades=1; grades<=jury; grades++){
            score+=Number(input[index]);
            index++
            numberExams++;
        }
        console.log(`${project} - ${(score/jury).toFixed(2)}.`)
        project=input[index];
        index++
        totalScore+=score;
    }
    console.log(`Student's final assessment is ${(totalScore/numberExams).toFixed(2)}.`);
}
solve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

