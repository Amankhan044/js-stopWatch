var min=0;
var sec=0;
var msec=0;

var minp=document.getElementById("min");
var secp=document.getElementById("sec");
var msecp=document.getElementById("msec");
var str=document.getElementById("start");
var interval;

function timer(){
    msec++;
    msecp.innerHTML=msec;
    if(msec>=100){
        sec++;
        secp.innerHTML=sec;
        msec=0;  
    }
    else if(sec>=60){
        min++;
        sec=0;
        minp.innerHTML=min;
    }
}



function start(){
    interval=setInterval(timer,10)
    str.disabled = true;
    

}
function pause(){
    clearInterval(interval);
    document.getElementById("start");
    str.disabled=false;
}

function reset(){
    min=0;
    sec=0;
     msec=0;
     minp.innerHTML=min;
    secp.innerHTML=sec;
     msecp.innerHTML=msec;
     pause();
}


// function myFunction() {
//     setTimeout(()=>{
//       btn.disabled = false;
//       console.log('Button Activated')}, 5000)
//   }

