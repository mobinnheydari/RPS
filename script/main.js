let you=0;
let ai=0;
document.getElementById("scores").innerHTML="You "+you+":"+ai+" Ai ";

function game(){
    
    let paper=document.getElementById("paper");
let two=document.getElementById("two");
let rock=document.getElementById("rock");
let n=Math.floor(Math.random() * 3) + 1;
let tryagain=document.getElementById("start");
let vt=document.getElementById("s3");
/**1 =paper  2=two 3=rock*/
if(paper.checked && n==1 ){
let status=document.getElementById("head");
status.innerHTML="DRAW"
vt.innerHTML="paper ai";
status.style.color="white";
tryagain.innerText="PLAY AGAIN"
}
else if(paper.checked && n==2 ){
    let status=document.getElementById("head");
    status.innerHTML="You Lost!"
    status.style.color="red";
    ai=ai+1;
    vt.innerHTML="gheichi ai";

    tryagain.innerText="PLAY AGAIN"

}
else if(paper.checked && n==3 ){
    let status=document.getElementById("head");
    status.innerHTML="You Win!"
    status.style.color="green";
    vt.innerHTML="rock ai";

you=you+1;
tryagain.innerText="PLAY AGAIN"

}
else if(two.checked && n==1 ){
    let status=document.getElementById("head");
    status.innerHTML="You Win!"
    status.style.color="green";
    vt.innerHTML="paper ai";

    you=you+1;
    tryagain.innerText="PLAY AGAIN"


}
else if(two.checked && n==2 ){
    let status=document.getElementById("head");
    status.innerHTML="You DRAW!"
    status.style.color="white";
    vt.innerHTML="gheici ai";

    tryagain.innerText="PLAY AGAIN"

}
else if(two.checked && n==3 ){
    let status=document.getElementById("head");
    status.innerHTML="You Lost!"
    vt.innerHTML="rock ai";

    status.style.color="red";
    ai=ai+1;
    tryagain.innerText="PLAY AGAIN"

}
else if(rock.checked && n==1 ){
    let status=document.getElementById("head");
    status.innerHTML="You Lost!"
    status.style.color="red";
    vt.innerHTML="paper ai";

    ai=ai+1;
    tryagain.innerText="PLAY AGAIN"

}
else if(rock.checked && n==2 ){
    let status=document.getElementById("head");
    status.innerHTML="You Win!"
    vt.innerHTML="gheichi ai";

    status.style.color="green";
    you=you+1;
    tryagain.innerText="PLAY AGAIN"

}
else if(rock.checked && n==3 ){
    let status=document.getElementById("head");
    vt.innerHTML="rock ai";

    status.innerHTML="DRAW!"
    status.style.color="white";

    tryagain.innerText="PLAY AGAIN"

}
document.getElementById("scores").innerHTML="You "+you+":"+ai+" Ai ";

}
