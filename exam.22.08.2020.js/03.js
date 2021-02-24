function solve(mounth,hours,people,dorn){
    hours=Number(hours);
    people=Number(people);
    let onehour=0

    if(mounth==='march'||mounth==='april'||mounth==='may'){
        switch(dorn){
            case 'day':onehour+=10.50;break;
            case 'night':onehour+=8.40;break;
        }
    } else if(mounth==='june'||mounth==='july'||mounth==='august'){
        switch(dorn){
            case 'day':onehour+=12.60;break;
            case 'night':onehour+=10.20;break;
        }
    }
    if(people >= 4){
        onehour*=0.9;
    }
    if(hours>=5){
        onehour*=0.5;
    }
    let allMoney=(hours*onehour)*people;
    console.log(`Price per person for one hour: ${onehour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${allMoney.toFixed(2)}`)
}
solve('july',
    '5',
    '3',
    'night'
    )