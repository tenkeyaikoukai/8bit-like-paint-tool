
var px=10;
var py=10;
var penstate=0;
var pencolor=7;
var scr=new Array();

function init(){
for(var i=0;i<=19;i++){
for(var j=0;j<=19;j++){
scr[i*20+j]=0;
}
}
draw();

}
function keyin(keychr){
var brf=0;
if(keychr=="x" && penstate==1){penstate=0;brf=1;}
if(keychr=="x" && penstate==0 && brf==0){penstate=1;brf=0;}
if(keychr=="z"){
pencolor++;
if(pencolor>7){pencolor=0;}
}


if(keychr=="up" && py>=1){py--;}
if(keychr=="down" && py<=18){py++;}
if(keychr=="left" && px>=1){px--;}
if(keychr=="right" && px<=18){px++;}
if(penstate==1){scr[py*20+px]=pencolor;}

cls();
draw();
}
function routine(){

}

function draw(){
for(var i=0;i<=19;i++){
for(var j=0;j<=19;j++){
color(scr[i*20+j]);put(chrname("fill"),j,i);
}
}
cc=scr[py*20+px];
if(cc>=4){color(0);}else{color(7);}
put(chrname("star"),px,py);
color(7);
var str1="";
if(pencolor==0){str1="Black";}
if(pencolor==1){str1="Blue";}
if(pencolor==2){str1="Red";}
if(pencolor==3){str1="Magenta";}
if(pencolor==4){str1="Green";}
if(pencolor==5){str1="Cyan";}
if(pencolor==6){str1="Yellow";}
if(pencolor==7){str1="White";}
var str2="";
if(penstate==1){str2="On";}else{str2="Off";}
var str3="Color(Z key):"+str1+" Pen(X key):"+str2;
println(str3);
}
