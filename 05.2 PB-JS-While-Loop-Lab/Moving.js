function solve(input){
    let length=Number(input[0]);
    let width=Number(input[1]);
    let higth=Number(input[2]);
    let index=3;
    let apartmentSpace=length*width*higth;
    let charactar=0;
    let sum=0;
    while(charactar !== 'Done'){
        let currentNUmber=Number(charactar);
        sum+=currentNUmber;
        charactar=input[index];
        index++;
        
        if(sum>apartmentSpace){
           let spaceNeeded=sum-apartmentSpace; 
           console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
         break;
        }
    }
    if(apartmentSpace>=sum){
       let spaceLeft=apartmentSpace-sum;
       console.log(`${spaceLeft} Cubic meters left.`)
    }  
}
solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


