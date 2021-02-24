function solve(arg){
    let area = Number(arg);
    let totalMoney = area * 7.61
    let discount = totalMoney * 0.18
    console.log(`The final price is: ${totalMoney-discount} lv. `);
    console.log(`The discount is: ${discount} lv.`);
}
solve("550");