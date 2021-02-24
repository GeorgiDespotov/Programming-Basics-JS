function solve(fruit,set,setNum){
    setNum=Number(setNum);
    let total=0;
    let sum=0;
    if(set=='small'){
      switch(fruit){
        case 'Watermelon':sum=setNum*56*2;break;
        case 'Mango':sum=setNum*36.66*2;break;
        case 'Pineapple':sum=setNum*42.10*2;break;
        case 'Raspberry':sum=setNum*20*2;break;
      }
    } else if(set=='big'){
       switch(fruit){
        case 'Watermelon':sum=setNum*28.70*5;break;
        case 'Mango':sum=setNum*19.60*5;break;
        case 'Pineapple':sum=setNum*24.80*5;break;
        case 'Raspberry':sum=setNum*15.20*5;break;
       }
    }
    if(sum>=400&&sum<=1000){
      total=sum*0.85;
      console.log(`${total.toFixed(2)} lv.`);
    } else if(sum>1000){
        total=sum*0.5;
        console.log(`${total.toFixed(2)} lv.`);
    } else {
        console.log(`${sum.toFixed(2)} lv.`);
    }
}
solve('Pineapple','small',1)