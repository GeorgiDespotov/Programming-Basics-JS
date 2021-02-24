function solve(srok,tipe,internet,mounts){
    mounts=Number(mounts);
    let money=0;
    let oneMount=1;
    if(srok === 'one'){
        switch(tipe){
            case 'Small':oneMount*=9.98;break;
            case 'Middle':oneMount*=18.99;break;
            case 'Large':oneMount*=25.98;break;
            case 'ExtraLarge':oneMount*=35.99;break;
        }
        money=mounts*oneMount;
    } else if(srok === 'two'){
        switch(tipe){
            case 'Small':oneMount*=8.58;break;
            case 'Middle':oneMount*=17.09;break;
            case 'Large':oneMount*=23.59;break;
            case 'ExtraLarge':oneMount*=31.79;break;
        }
    }
    if(internet === 'yes'){
        if(oneMount<=10){
            oneMount+=5.50;
        } else if(oneMount>10&&oneMount<=30){
            oneMount+=4.35;
        } else {
            oneMount+=3.85;
        }
    }
    if(srok==='two'){
        oneMount*=0.9625
    }
    money=mounts*oneMount;
    console.log(`${money.toFixed(2)} lv.`);
    
    
}
solve('two',
    'Large',
    'no',
    '10'
    )
