function solve(pens,markers,fluid,discount){
    pens=Number(pens);
    markers=Number(markers);
    fluid=Number(fluid);
    discount=Number(discount);
    let discpro=discount/100
    let totalDisc=((pens*5.8)+(markers*7.2)+(fluid*1.2))*discpro
    let total=((pens*5.8)+(markers*7.2)+(fluid*1.2))-totalDisc
    console.log((total).toFixed(3))
}
solve(4,
    2,
    5,
    13
    )