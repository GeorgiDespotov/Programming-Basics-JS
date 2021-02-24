function solve(input){
    let index=0;
    let command=input[index];
    index++;
    let sumKids=0;
    let sumStandard=0;
    let sumStudents=0;
    while(command !=='Finish' && index < input.length){
        let movieTittle=command;
        let capacity=input[index];
        index++;
        let nextPersone=input[index];
        index++;
        let counter=0;
        while(nextPersone !== 'End'){
            if(nextPersone==='kid'){
                sumKids++;
            } else if(nextPersone==='student'){
                sumStudents++;
            } else if(nextPersone==='standard'){
                sumStandard++;
            }
            counter++;
            if(counter == capacity){
                break;
            }
            nextPersone=input[index];
            index++;
        }
        console.log(`${movieTittle} - ${((counter/capacity)*100).toFixed(2)}% full.`);
        command=input[index];
        index++;
    }
    let totalTickets=sumKids+sumStandard+sumStudents;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((sumStudents/totalTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((sumStandard/totalTickets)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((sumKids/totalTickets)*100).toFixed(2)}% kids tickets.`);

}     
solve(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

