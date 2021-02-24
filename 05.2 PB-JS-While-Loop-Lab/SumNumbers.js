function solve(input){
    let n=Number(input[0]);
    let index=1;
    let sum=0;
    while(sum < n){
        let curentNumber=Number(input[index]);
        sum+=curentNumber;
        index++
    }
    console.log(sum);
}
solve(["100",
"10",
"20",
"30",
"40"])
