
function solve(priceScKilo,priceCacaKilo,kiloPalmud,kiloSafr,kiloMidi){
    priceScKilo=Number(priceScKilo);
    priceCacaKilo=Number(priceCacaKilo);
    kiloPalmud=Number(kiloPalmud);
    kiloSafr=Number(kiloSafr);
    kiloMidi=Number(kiloMidi);
    let pricePalmud=(0.6*priceScKilo)+priceScKilo;
    let priceSafr=((priceCacaKilo*0.80)+priceCacaKilo);
    let priceMidi=7.50;
    let sumPalmud=pricePalmud*kiloPalmud;
    let sumSafr=priceSafr*kiloSafr;
    let sumMidi=priceMidi*kiloMidi;
    console.log((sumPalmud+sumSafr+sumMidi).toFixed(2));
}
solve('5.55','3.57','4.3','3.6','7');