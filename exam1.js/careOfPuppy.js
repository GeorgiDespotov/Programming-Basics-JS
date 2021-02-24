function solve(input){
    let index=0;
    let food=(Number(input[index]))*1000;
    index++;
    let command=input[index];
    index++
    let foodEaten=0;
    while(command !== 'Adopted'){
        let nextPortion=Number(command);
        foodEaten+=nextPortion;
        
        command=input[index];
        index++;
    }
    if(food >= foodEaten){
        console.log(`Food is enough! Leftovers: ${food-foodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEaten-food} grams more.`)
    }
}
solve([
    '4',   '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted'
  ]
  )