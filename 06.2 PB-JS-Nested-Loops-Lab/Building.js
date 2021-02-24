function solve(input){
    let floor=input[0];
    let apart=input[1];
    
    for( let a = floor; a>0; a--){
        let result='';
        for( let b = 0; b<apart; b++){
            if(a == floor){
                result+=`L${a}${b} `;
            } else if(a % 2 !==0){
                result+=`A${a}${b} `;
            } else {
                result+=`O${a}${b} `;
            }
        }
        console.log(result);
    }
}
solve(["6", "4"])