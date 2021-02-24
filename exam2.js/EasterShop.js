function solve(input){
    let index=0;
    let shopEggs=Number(input[index]);
    index++;
    let command=input[index];
    index++;
    let soldEggs=0;
    while(command !== 'Close'){
        let eggs=Number(input[index]);
        index++;
        if(command === 'Buy'){
            if(eggs>shopEggs){
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${shopEggs}.`);
                break;
            }
            shopEggs-=eggs;
            soldEggs+=eggs;
        } else if(command === 'Fill'){
            shopEggs+=eggs;
        }
        command=input[index];
        index++;
    }
    if(command === 'Close'){
        console.log(`Store is closed!`);
        console.log(`${soldEggs} eggs sold.`)
    }

}
solve(['20',
    'Fill',
    '30',
    'Buy',
    '15',
    'Buy',
    '20',
    'Close'
    
    ])