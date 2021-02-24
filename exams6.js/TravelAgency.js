function solve(city,extras,vip,days){
    days=Number(days);
    let oneDay=0;
    let isInvalid=false;

    if(city == 'Bansko' || city == 'Borovets'){
        if(vip==='no'){
            switch(extras){
                case 'noEquipment':oneDay+=80;break;
                case 'withEquipment':oneDay+=100;break;
                
            }
            isInvalid=true;
        } else {
            switch(extras){
                case 'noEquipment':oneDay+=(80*0.95);break;
                case 'withEquipment':oneDay+=(100*0.90);break;
                
            }
            isInvalid=true;
        }
    } else if(city == 'Varna' || city == 'Burgas'){
        if(vip==='no'){
            switch(extras){
                case 'noBreakfast':oneDay+=100;break;
                case 'withBreakfast':oneDay+=130;break;
                
            }
            isInvalid=true;
        } else {
            switch(extras){
                case 'noBreakfast':oneDay+=(100*0.93);break;
                case 'withBreakfast':oneDay+=(130*0.88);break;
                
            }
            isInvalid=true;
        }
    }
    if(days>7){
        days-=1;
    }
    if(days<1){
        console.log(`Days must be positive number!`);
    }
    if(!isInvalid || oneDay===0){
        console.log(`Invalid input!`)
    } else if(isInvalid && days>0){
        console.log(`The price is ${(days*oneDay).toFixed(2)}lv! Have a nice time!`)
    }
    
}
solve('Borovets',
    'noEquipmentt',
    'yes',
    '6'
    )