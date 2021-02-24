function solve(minutes,wallks,kal){
    minutes=Number(minutes);
    wallks=Number(wallks);
    kal=Number(kal);
    let totalWalks=minutes*wallks;
    let kalBurnt=totalWalks*5;
    if(kalBurnt>=(kal/2)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${kalBurnt}.`)
    } else (
         console.log(`No, the walk for your cat is not enough. Burned calories per day: ${kalBurnt}.`)
    )
}
solve(15,2,500)