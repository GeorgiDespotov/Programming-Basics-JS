function solve(block){
    let penalty=0;
    let salary=Number(block[1]);
    let moneyLeft=0;
    
    for(let i=1; i<=block.length; i++){
        if(block[i]=="Facebook"){
           penalty+=150
        } else if(block[i]=="Instagram"){
           penalty+=100
        } else if(block[i]=="Reddit"){
           penalty+=50;
        }
    }
    if(salary>penalty){
        moneyLeft=salary-penalty;
        console.log(`${moneyLeft}`);
    } else {
        console.log(`You have lost your salary.`)
    }
  }
  solve(["3",
  "500",
  "Facebook",
  "Stackoverflow.com",
  "softuni.bg"])
  

