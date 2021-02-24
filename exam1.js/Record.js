function recordBreaking(recordSeconds,distanceMetri,timeSwimPurMetur){
    recordSeconds=Number(recordSeconds);
    distanceMetri=Number(distanceMetri);
    timeSwimPurMetur=Number(timeSwimPurMetur);
    let delay=Math.floor(distanceMetri/50);
    let IvansDelay=delay*30;
    let IvanDistanceSeconds=(distanceMetri*timeSwimPurMetur)+IvansDelay;
    if (IvanDistanceSeconds<recordSeconds){
        console.log(`Yes! The new record is ${IvanDistanceSeconds.toFixed(2)} seconds.`);
    }
    else {
        let IvanTime=IvanDistanceSeconds-recordSeconds;
        IvanDistanceSeconds>=recordSeconds;
        console.log(`No! He was ${IvanTime.toFixed(2)} seconds slower.`)
    }
}
recordBreaking(5554.36,
1340,
3.23,

    )