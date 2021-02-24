function solve(input){
    let index=0;
    let allCustomers=Number(input[index]);
    index++;
    let totalSum=0;
    for(let customer=1;customer<=allCustomers;customer++){
        let command=input[index];
        index++
        let total=0;
        let counter=0;
        while(command !== 'Finish'){
            let article=command;
            if(article === 'basket'){
               total+=1.50;
               counter++
            } else if(article === 'wreath'){
                total+=3.80;
                counter++;
            } else if(article === 'chocolate bunny'){
                total+=7;
                counter++;
            }
            command=input[index];
            index++
        }
        if(counter % 2 === 0){
            total*=0.80;
        }
        console.log(`You purchased ${counter} items for ${total.toFixed(2)} leva.`);
        totalSum+=total;
    }
    let averageBill=totalSum/allCustomers;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);

}
solve([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
  ])