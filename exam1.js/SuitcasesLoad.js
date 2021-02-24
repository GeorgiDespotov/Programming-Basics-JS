function solve(input){
    let index=0;
    let capacity=Number(input[index]);
    index++;
    let command=input[index];
    index++
    let suitcases=1;
    let allSuitcases=0;
    let isFull=false;
    while(command !== 'End'){
        let nextSuitcase=Number(command);
        if(suitcases % 3 === 0 ){
            nextSuitcase*=1.10;
        }
        capacity-=nextSuitcase;
        if(0>capacity){
            suitcases--;
            isFull=true;
            break;
        }
        command=input[index];
        index++; 
        if(command !== 'End'){
            suitcases++;
        } 
    }
    if(!isFull){
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }
    console.log(`Statistic: ${suitcases} suitcases loaded.`);

}
solve([ '700.5', '180', '340.6', '126', '220' ]
)