function solve(input){
    let index=0;
    let command=input[index];
    index++
    let maxPoints=Number.MIN_SAFE_INTEGER;
    let won='';
    while(command !== 'Stop'){
        let name=command;
        let length=name.length;
        let points=0;
        for(let i=0; i<length; i++){
            
            let num=Number(input[index]);
            index++
            if(num == name.charCodeAt(i)){
               points+=10;
            } else {
                points+=2
            }
        }
        if(points>=maxPoints){
            maxPoints=points;
            won=name;
        }
        command=input[index];
        index++;
    }
    console.log(`The winner is ${won} with ${maxPoints} points!`);

}
solve([
    'Ivan', '73',  '20',
    '98',   '110', 'Ivo',
    '80',   '65',  '87',
    'Stop'
  ])