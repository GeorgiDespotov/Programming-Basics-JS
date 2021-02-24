function solve(input){
    let index = 0;
    let word=input[index];
    index++;
    let maxSum=Number.MIN_SAFE_INTEGER;
    let wonWord='';
   
    while(word !== 'End of words'){
        let length=word.length;
        let sum=0;
        let firstChar=word[0];
        for(let i = 0; i < length; i++){
            sum+=word.charCodeAt(i);
        }
        if(firstChar==='A'||firstChar==='a'||firstChar==='E'||firstChar==='e'||firstChar==='I'||firstChar==='i'||firstChar==='O'||firstChar==='o'||firstChar==='U'||firstChar==='u'||firstChar==='Y'||firstChar==='y'){
            sum*=length;
        } else {
            sum=Math.floor(sum/length);
        }
        if(sum>maxSum){
            maxSum=sum;
            wonWord=word;
        }
        word=input[index];
        index++;
    }
    console.log(`The most powerful word is ${wonWord} - ${maxSum}`)

}
solve([
    'The',
    'Most',
    'Powerful',
    'Word',
    'Is',
    'Experience',
    'End of words'
  ])