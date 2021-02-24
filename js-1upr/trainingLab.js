function solve(w,h){
    w=Number(w);
    h=Number(h);
    let rols=w/1.2;
    rols=Math.trunc(rols);
    let lines=(h-1)/0.7;
    lines=Math.trunc(lines);
    console.log(lines*rols-3);
}

solve('15','8.9');