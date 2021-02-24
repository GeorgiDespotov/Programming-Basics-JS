function solve(priceKiloVeg,priceKiloFru,kilosVeg,kiloFru){
    priceKiloVeg=Number(priceKiloVeg);
    priceKiloFru=Number(priceKiloFru);
    kilosVeg=Number(kilosVeg);
    kiloFru=Number(kiloFru);
    let vegPrice=priceKiloVeg*kilosVeg;
    let fruPrice=priceKiloFru*kiloFru;
    let sum=vegPrice+fruPrice;
    console.log((sum/1.94).toFixed(2));
}
solve('0.194','19.4','10','10');