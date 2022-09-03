/* global console */
// setTimeout to reload
var re_load=function load(){
    location.reload(false);
}
// --------------------night and sun----------------------------------------
var cur=new Date();
var cur_h=cur.getHours();
if(cur_h<12){
    document.getElementById("h").textContent="Good Morning Winne";
    document.querySelector(".background").style.background="linear-gradient(#376281,#10001f)";
    document.getElementById("moon").style.visibility="hidden";
}
if(cur_h>12){
    document.getElementById("h").textContent="Good Evening Winne";
}
else{ 
    document.getElementById("h").textContent="Good Morning Winne";
    document.querySelector(".background").style.background="linear-gradient(#376281,#10001f)";
    document.getElementById("moon").style.visibility="hidden";   
}
// --------------------game  algorism----------------------------------------        
sol=parseInt(Math.random()*16)+1;
trying=5;
win=false;
function change(cur_img)
{
    if(win) return;
    if(cur_img.id==sol)
    {
        cur_img.src="images/win.jpg";
        document.getElementById("res").textContent="Winner";    
        win=true;
        setTimeout(re_load,2000);

    }
    else
    {
        cur_img.src="images/lose.jpg";
        trying--;
        document.getElementById("res").textContent=trying; 
        if(trying==0){
            document.getElementById("res").innerHTML="<span> Loser winne <span>";
            win=true;
            setTimeout(re_load,1800);
        }
    }
}