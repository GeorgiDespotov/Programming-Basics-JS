function change(bitcoins,iuans,comission){
    bitcoins=Number(bitcoins);
    iuans=Number(iuans);
    comission=Number(comission);
    comproc=comission/100 
    let com=(((bitcoins*1168)+(iuans*0.15*1.76))/1.95)*comproc;
     let total=(((bitcoins*1168)+(iuans*0.15*1.76))/1.95)-com;
     
     console.log((total).toFixed(2))

}
change(1,5,5)