function solve(rad){
    rad = Number(rad);
    let dgr = rad * 180/ Math.PI;
    console.log(dgr.toFixed(0));
}
solve('0.7854')