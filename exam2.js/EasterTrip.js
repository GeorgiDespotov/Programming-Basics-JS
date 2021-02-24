function solve(City,dates,nights){
    nights=Number(nights);
    let money=0;
    if(dates === '21-23'){
        switch(City){
            case 'France':money=nights*30;break;
            case 'Italy':money=nights*28;break;
            case 'Germany':money=nights*32;break;
        }
    } else if(dates === '24-27'){
        switch(City){
            case 'France':money=nights*35;break;
            case 'Italy':money=nights*32;break;
            case 'Germany':money=nights*37;break;
        }
    } else if(dates === '28-31'){
        switch(City){
            case 'France':money=nights*40;break;
            case 'Italy':money=nights*39;break;
            case 'Germany':money=nights*43;break;
        }
    }
    console.log(`Easter trip to ${City} : ${money.toFixed(2)} leva.`);
}
solve('Germany','24-27','5')