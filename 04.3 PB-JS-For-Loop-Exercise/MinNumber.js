function minNumber(block){
    
    let smallest=100000;
    for(let i=1; i<block.length; i++){
       let num=Number(block[i])
       if(num<smallest){
           smallest=num
        }
    }
    console.log(smallest)
}
minNumber(["4",
"45",
"-20",
"7",
"99"])




