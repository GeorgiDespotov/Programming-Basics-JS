function solve(input){
    let index=0;
    let command=input[index];
    index++;
    let kidsTickeds=0;
    let standardTickets=0;
    let studentTickets=0;
    
    while(command !== 'Finish'&& index<input.length){
        let movieTittle=command;
        let capacity=input[index];
        index++;
        let nextTicket=input[index];
        index++;
        let ticketCounter=0;
        while(nextTicket !== 'End'){
            if(nextTicket == 'standard'){
                standardTickets++;
            } else if(nextTicket == 'student'){
                studentTickets++;
            } else if(nextTicket == 'kid'){
                kidsTickeds++;
            }
            ticketCounter++;
            if(ticketCounter == Number(capacity)){
                break;
            }
            nextTicket=input[index];
            index++
        }
        console.log(`${movieTittle} - ${((ticketCounter/capacity)*100).toFixed(2)}% full.`);
        command=input[index];
        index++;
    }
    let totalTickets=kidsTickeds+studentTickets+standardTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets/totalTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets/totalTickets)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickeds/totalTickets)*100).toFixed(2)}% kids tickets.`);

}
solve(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
