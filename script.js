const endDate="30 Oct 2023 , 03:04 PM"
document.getElementsByClassName('title')[1].innerHTML=endDate;
const inputes=document.querySelectorAll('input')

const clock=()=>{
    const end=new Date(endDate)
    const now=new Date();
    const diff=(end-now)/1000  //diff receved into millisecond / for converting into seconds devide with 1000
    if(diff<0){
        return;
    }
    
    
    const day=Math.floor(diff/3600/24)
    inputes[0].value=day;

    const hours=Math.floor(diff/3600 % 24)
    inputes[1].value=hours;

    const minutes=Math.floor(diff/60 % 60)
    inputes[2].value=minutes;

    const sec=Math.floor(diff % 60)
    inputes[3].value=sec;
    // 1 day = 24hours
    // 1hours =60 minutes
    // 1minutes= 60 seconds
    // 1 seconds=1000 ms

}
setInterval(()=>{
    clock()

},1000)

    




   