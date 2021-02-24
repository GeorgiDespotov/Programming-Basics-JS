function solve(){
    for(let hour=0; hour<24; hour++){
        for(let min=0; min<60; min++){
            let h= hour;
            let m= min;
            if(hour<10){
                h = '0'+ h;
            }
            if(min<10){
                m = '0'+m;
            }
            console.log(`${h}:${m}`);
        }
    }

}
solve();