function solve(result1,result2,result3){
    let win=0;
    let lose=0;
    let draw=0;
    if(Number(result1[0]) > Number(result1[2])){
       win++; 
    } else if(Number(result1[0]) < Number(result1[2])){
        lose++;
    } else {
        draw++;
    }
    if(Number(result2[0]) > Number(result2[2])){
        win++; 
     } else if(Number(result2[0]) < Number(result2[2])){
         lose++;
     } else {
         draw++;
     }
     if(Number(result3[0]) > Number(result3[2])){
        win++; 
     } else if(Number(result3[0]) < Number(result3[2])){
         lose++;
     } else {
         draw++;
     }
     
    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${draw}`); 

}
solve('3:1',
    '0:2',
    '0:0'
    )