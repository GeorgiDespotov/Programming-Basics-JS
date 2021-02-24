function solve(input){
let name=input[0];
let grades=1;
let sum=0;
let index=0;
let exCluded=0;
while(grades<=12){
    index++;
    let grade=Number(input[index]);
    if(grade<4){
        exCluded++;
        if(exCluded===2){
        console.log(`${name} has been excluded at ${grades} grade`);
        break;
        }
        continue;
    }    
    sum+=grade;
    grades++;
 
}
if(exCluded<2){
    console.log(`${name} graduated. Average grade: ${(sum/12).toFixed(2)}`)
}

}
solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


