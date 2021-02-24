function read(Input){
    let index=0;
    while(true){
        let str=Input[index];
        index++;
        if(str==='Stop'){
            break;
        }
        console.log(str);
    }
}
read(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
