function solve(eggsSise,color,num){
    num=Number(num);
    let money=0;

    if(color === 'Red'){
        switch(eggsSise){
            case 'Large':money=num*16;break;
            case 'Medium':money=num*13;break;
            case 'Small':money=num*9;break;
        }
    } else if(color === 'Green'){
        switch(eggsSise){
            case 'Large':money=num*12;break;
            case 'Medium':money=num*9;break;
            case 'Small':money=num*8;break;
        }
    } else if(color === 'Yellow'){
        switch(eggsSise){
            case 'Large':money=num*9;break;
            case 'Medium':money=num*7;break;
            case 'Small':money=num*5;break;
        }
    }
    money*=0.65
    console.log(`${money.toFixed(2)} leva.`);
}
solve('Large',
    'Red',
    '7'
    )