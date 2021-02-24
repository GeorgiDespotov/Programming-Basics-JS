function solve(priceFlouerKg,flourKf,shugarKg,eggsPack,maiaPack){
    let money=(priceFlouerKg*flourKf)+(shugarKg*(0.75*priceFlouerKg))+(eggsPack*(priceFlouerKg*1.10))+(maiaPack*((priceFlouerKg*0.75)*0.20))
    console.log(money.toFixed(2))
}
solve('50',
    '10',
    '3.5',
    '6',
    '1'
    )