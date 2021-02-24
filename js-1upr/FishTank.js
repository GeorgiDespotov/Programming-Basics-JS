function solve(lenthSm,widthSm,heightSm,percent){
    lenthSm=Number(lenthSm);
    widthSm=Number(widthSm);
    heightSm=Number(heightSm);
    percent=Number(percent);
    let volume=lenthSm*widthSm*heightSm;
    let volumeInLiter=volume*0.001;
    let percentes=percent/100;
    console.log(volumeInLiter-(volumeInLiter*percentes));
}
solve('85','75','47','17');