function rollno(num,time,nextroll){
    setTimeout(()=>{
        console.log("Roll no. :",num);
        if (nextroll) nextroll();
    },time)
}

rollno(1,1000,()=>{
    rollno(2,2000,()=>{
        rollno(3,3000,()=>{
            rollno(4,4000,()=>{
                rollno(5,5000);
            })
        })
    })
})