function solve (input) {
    let fNumber = Number(input[0]);
    let sNumber = Number(input[1]);
    let tNumber = Number(input[2]);
    let fNumber = Number(input[3]);
 
    let combo = 0;
 
    for (let K = fNumber; K <= 8; K++)
    {
 
        for (let L = 9; L >= sNumber; L--)
        {
            for (let M = tNumber; M <= 8; M++)
            {
                for (let N = 9; N >= fNumber; N--)
                {
 
 
                    if (K == M && L == N && K % 2 == 0 && L % 2 != 0)
                    {
 
                        console.log("Cannot change the same player.");
                    }
                    else if (K % 2 == 0 && L % 2 != 0 && M % 2 == 0 && N % 2 != 0)
                    {
 
                        console.log(`${K}${L} - ${M}${N}`);
                        combo++;
                    }
                    if (combo == 6)
                    {
        break;
                    }
                }
                if (combo == 6)
                {
                    break;
                }
 
            }
            if (combo == 6)
            {
                break;
            }
        }
        if (combo == 6)
        {
            break;
        }
    }
}
solve([ '6', '7', '5', '6', '' ])