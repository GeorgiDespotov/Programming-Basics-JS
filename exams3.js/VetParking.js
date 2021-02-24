function solve(input){
    let days=Number(input[0]);
    let hours=Number(input[1]);
    let taxeSum=0;
    for(let day=1; day<=days; day++){
        let taxe=0;
        for(let hour=1;hour<=hours;hour++){
            if(day % 2 === 0 && hour % 2 !== 0){
                taxe+=2.50;
            } else if(day % 2 !== 0 && hour % 2 === 0){
                taxe+=1.25;
            } else {
                taxe+=1;
            }
        }
        console.log(`Day: ${day} - ${taxe.toFixed(2)} leva`);
        taxeSum+=taxe;
    }
    console.log(`Total: ${taxeSum.toFixed(2)} leva`);

}
solve([ '2', '5' ])