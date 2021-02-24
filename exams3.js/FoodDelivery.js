function solve(chiken,fish,vegy){
    chiken=Number(chiken);
    fish=Number(fish);
    vegy=Number(vegy);
    let total=(((chiken*10.35)+(fish*12.40)+(vegy*8.15))*1.2)+2.5;

    console.log(`Total: ${total.toFixed(2)}`)

}
solve('2','4','3')