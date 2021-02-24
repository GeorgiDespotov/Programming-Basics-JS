function solve(x,y,h){
    x=Number(x);
    y=Number(y);
    h=Number(h);
    let doorArea=1.2*2;
    let windowsArea=(1.5*1.5)*2;
    let frontBackWallsArea=((x*x)*2)-doorArea;
    let sideWallsareaArea=((x*y)*2)-windowsArea;
    console.log(((frontBackWallsArea+sideWallsareaArea)/3.4).toFixed(2));
    let sidesRoofArea=((x*y)*2);
    let frontBackRoofArea=(((x*h)/2)*2);
    console.log(((sidesRoofArea+frontBackRoofArea)/4.3).toFixed(2));
}
solve('6','10','5.2');