function solve(a){
    let metri=5364;
    let days=1;

    for(let i=0;i<a.length;i++){

        if(a[i]=== 'Yes'){
            days++;
            if(days>5){
                if(metri<8848){
                console.log(`Falied!`);
                console.log(metri);
                break;
                }
            }
        }  
               else if(a[i]!=='END'&&a[i !=='No']){
                    metri+=Numbera[i];
                    if(metri>=8848){
                        console.log(`Goal reached for ${days} days!`);
                        break;
                    } 
                }else if(a[i]==='END'){
            console.log(`Falied!`);
                console.log(metri);
                break;
        }
    }    

}