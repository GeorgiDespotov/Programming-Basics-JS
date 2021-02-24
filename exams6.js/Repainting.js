function solve(cover,paint,razr,manhours){
    cover=Number(cover);
    paint=Number(paint);
    razr=Number(razr);
    manhours=Number(manhours);
    let totalMat=((cover+2)*1.50)+((paint*1.1)*14.50)+(razr*5)+0.40
    let totalExpman=(totalMat*0.3)*manhours;
    let total=totalExpman+totalMat;
    console.log(`Total expenses: ${total.toFixed(2)} lv.`);

}
solve('10','11','4','8')