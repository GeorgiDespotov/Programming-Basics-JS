function race(fuel,cost,laps){
    fuel=Number(fuel);
    cost=Number(cost);
    laps=Number(laps);
    let fuelSpend=0;
    let lapFuel=0;
    let rmlaps=0;
    for(let i=1;i<=laps;i++){
      fuelSpend+=cost-lapFuel;
      lapFuel=0.1;
      if(fuelSpend>=fuel)break;{
          rmlaps=laps-i;
        } 
    }
    if(fuelSpend>=fuel){
        console.log(`You are out of fuel in round ${laps-rmlaps}!`)
    }
    if(fuelSpend<fuel) {
        console.log(`Congrats! You won the race!`)
    }
}
race("50", "4.3", "30")