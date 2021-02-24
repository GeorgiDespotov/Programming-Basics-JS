function solve(input){
    let index = 0;
    let allEggs=Number(input[index]);
    index++
    let redC=0;
    let orangeC=0;
    let blueC=0;
    let greenC=0;
    for(let currenEgg=1;currenEgg<=allEggs;currenEgg++){
        let egg=input[index];
        index++;
        if(egg === 'red'){
            redC++;
        } else if(egg === 'orange'){
            orangeC++;
        } else if(egg === 'blue'){
            blueC++;
        } else if(egg === 'green'){
            greenC++;
        }
        
    }
    let maxEggs=Math.max(redC,orangeC,blueC,greenC);
    let color='';
    console.log(`Red eggs: ${redC}`);
    console.log(`Orange eggs: ${orangeC}`);
    console.log(`Blue eggs: ${blueC}`);
    console.log(`Green eggs: ${greenC}`);
    if(maxEggs===greenC){
        color='green';
    } else if(maxEggs===redC){
        color='red';
    }else if(maxEggs===orangeC){
        color='orange';
    } else if(maxEggs===blueC){
        color='blue';
    }
    console.log(`Max eggs: ${maxEggs} -> ${color}`)
}
solve([
    '7',     'orange',
    'blue',  'green',
    'green', 'blue',
    'red',   'green',
    ''
  ]);