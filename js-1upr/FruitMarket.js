function solve(priceStrawb,bananasInKilo,orangesInKilo,berriesInKilo,strawbInKilo){
    priceStrawb=Number(priceStrawb);
    bananasInKilo=Number(bananasInKilo);
    orangesInKilo=Number(orangesInKilo);
    berriesInKilo=Number(berriesInKilo);
    strawbInKilo=Number(strawbInKilo);
    let priceBerries=priceStrawb/2;
    let priceOranges=priceBerries*0.6;
    let priceBananas=priceBerries*0.2;
    let sumBerries=berriesInKilo*priceBerries;
    let sumOranges=orangesInKilo*priceOranges;
    let sumBananas=bananasInKilo*priceBananas;
    let sumStrawb=strawbInKilo*priceStrawb;
    console.log(sumBerries+sumOranges+sumBananas+sumStrawb);

}
solve('48','10','3.3','6.5','1.7');