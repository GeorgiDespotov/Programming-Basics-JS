function solve(input){
    let index=0;
    let allCackes=Number(input[index]);
    index++;
    let maxUsedSugar=Number.MIN_SAFE_INTEGER;
    let maxUsedFlour=Number.MIN_SAFE_INTEGER;
    let allSugarUsed=0;
    let allFlourUsed=0;
    for(let cakce=1; cakce<=allCackes; cakce++){
        let sugarUsed=Number(input[index]);
        index++;
        if(sugarUsed>maxUsedSugar){
            maxUsedSugar=sugarUsed;
        }
        let flourUsed=Number(input[index]);
        index++;
        if(flourUsed>maxUsedFlour){
            maxUsedFlour=flourUsed;
        }
        allSugarUsed+=sugarUsed;
        allFlourUsed+=flourUsed;

    }
    let sugarPack=Math.ceil(allSugarUsed/950);
    let flourPack=Math.ceil(allFlourUsed/750);
    console.log(`Sugar: ${sugarPack}`);
    console.log(`Flour: ${flourPack}`);
    console.log(`Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`)

}
solve([
    '3',   '400',
    '350', '250',
    '300', '450',
    '380', ''
  ])