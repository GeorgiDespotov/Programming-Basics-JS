function solve(dep,mounth,yintr){
    dep = Number(dep);
    mounth = Number(mounth);
    yintr = Number(yintr);
    let intr = dep * yintr/100;
    let oneMounth = intr/12;
    let total = dep + (mounth * oneMounth);
    console.log(dep + (mounth*oneMounth));
}
solve('200','3','5.7');