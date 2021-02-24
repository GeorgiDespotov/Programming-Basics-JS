function solve(input){
    let index=0;
    let command=input[index];
    index++;
    let dayCount=1;
    let hightCont=5364;
    let isFaild=false;

    while(command !== 'END'){
        let heSlept=command;
        if(heSlept === `Yes`){
            dayCount++;
        }
        let nextHight=Number(input[index]);
        index++;
        hightCont+=nextHight;
        if(dayCount > 5 ){
            isFaild=true;
            console.log(`Failed!`);
            console.log(`${hightCont}`);
            break;
        }
        if( dayCount<=5 && hightCont>=8848){
            isFaild=false;
            break;
        }
        command=input[index];
        index++;
        
    }
    if(!isFaild && hightCont>=8848 ){
        console.log(`Goal reached for ${dayCount} days!`)
    }
    if(command==='END' && hightCont<8848){
        console.log(`Failed!`);
            console.log(`${hightCont}`);
        
    }
}
solve([
    'Yes', '1000',
    'Yes', '945',
    'No',  '1200',
    'END'
  ])