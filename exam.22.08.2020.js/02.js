function solve(people,force,ilinden){
    people=Number(people);
    force=Number(force);
    ilinden=Number(ilinden);

    let allForce=people*force;

    if(allForce>=ilinden){
        console.log(`Illidan has been slain! You defeated him with ${allForce-ilinden} points.`)
    } else {
        console.log(`You are not prepared! You need ${ilinden-allForce} more points.`)
    }
}
solve('25','200','2000')