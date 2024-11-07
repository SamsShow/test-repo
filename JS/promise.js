function getRoll(num,delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Roll No is: ", num);
            // resolve("Sucessfully Done")
            reject("Error")
        }, delay);
    })
}


async function PrintRoll() {
    try {
        await getRoll(1, 1000);
        await getRoll(2, 2000);
        await getRoll(3, 3000);
        await getRoll(4, 4000);
    } catch (error) {
        console.log("Error: ", error);
    }
}
PrintRoll();