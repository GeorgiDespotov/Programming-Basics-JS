function solve(poc,video,ram,ramNum,discount){
    poc=Number(poc);
    video=Number(video);
    ram=Number(ram);
    ramNum=Number(ramNum);
    discount=Number(discount);

    let mlPoc=poc*1.57;
    let mlVideo=video*1.57;
    let mlRam=ram*1.57;
    let mPoc=mlPoc-(mlPoc*discount);
    let mVideo=mlVideo-(mlVideo*discount);
    let mRam=mlRam*ramNum;
    let allMoney=mPoc+mVideo+mRam;

    console.log(`Money needed - ${allMoney.toFixed(2)} leva.`);
}
solve('500','200','80','2','0.05')