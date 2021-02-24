function solve(priceeForRent){
    priceeForRent = Number(priceeForRent);
    let priceForCake = priceeForRent*(20/100);
    let priceForDrinks = priceForCake-(priceForCake*0.45);
    let priceForAnimator = priceeForRent/3;
    console.log(priceForAnimator+priceForDrinks+priceForCake+priceeForRent);
}
solve('2250');