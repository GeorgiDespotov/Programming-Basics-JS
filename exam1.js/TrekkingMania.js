function trakking(a){
    let n=Number(a[0]);
    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;
    let sum=0;
    for(let i=1; i<=n; i++){
        if(a[i]<=5){
            p1+=Number(a[i]);
        } else if(a[i]>=6 && a[i]<=12){
            p2+=Number(a[i]);
        } else if(a[i]>=13 && a[i]<=25){
            p3+=Number(a[i]);
        } else if(a[i]>=26 && a[i]<=40){
            p4+=Number(a[i]);
        } else if(a[i]>=41){
            p5+=Number(a[i]);
        }
        sum+=Number(a[i]);
    }
    
    p1=(p1/sum)*100;
    p2=(p2/sum)*100;
    p3=(p3/sum)*100; 
    p4=(p4/sum)*100; 
    p5=(p5/sum)*100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);  
  console.log(`${p3.toFixed(2)}%`);  
  console.log(`${p4.toFixed(2)}%`);  
  console.log(`${p5.toFixed(2)}%`); 
}
trakking(['10',
'10',
'5',
'1','100','12','26','17','37','40','78']);