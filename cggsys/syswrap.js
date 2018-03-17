
function emove(){
}
function collide(){
}
function dispchr(){
}
function putn(){
}
function chrname(stg){
switch(stg){
case "a":
return chra;
break;
case "b":
return chrb;
break;
case "c":
return chrc;
break;
case "d":
return chrd;
break;
case "e":
return chre;
break;
case "f":
return chrf;
break;
case "g":
return chrg;
break;
case "h":
return chrh;
break;
case "i":
return chri;
break;
case "j":
return chrj;
break;
case "k":
return chrk;
break;
case "l":
return chrl;
break;
case "m":
return chrm;
break;
case "m":
return chrm;
break;
case "n":
return chrn;
break;
case "o":
return chro;
break;
case "p":
return chrp;
break;
case "q":
return chrq;
break;
case "r":
return chrr;
break;
case "s":
return chrs;
break;
case "t":
return chrt;
break;
case "u":
return chru;
break;
case "v":
return chrv;
break;
case "w":
return chrw;
break;
case "x":
return chrx;
break;
case "y":
return chry;
break;
case "z":
return chrz;
break;
case "0":
return chrnum0;
break;
case "1":
return chrnum1;
break;
case "2":
return chrnum2;
break;
case "3":
return chrnum3;
break;
case "4":
return chrnum4;
break;
case "5":
return chrnum5;
break;
case "6":
return chrnum6;
break;
case "7":
return chrnum7;
break;
case "8":
return chrnum8;
break;
case "9":
return chrnum9;
break;
case ".":
return chr29;
break;
case "circle":
return chr1;
break;
case "heart":
return chr2;
break;
case "fill":
return chr3;
break;
case "sw":
return chr4;
break;
case "se":
return chr5;
break;
case "wave":
return chr6;
break;
case "spade":
return chr7;
break;
case "sharp":
return chr8;
break;
case "star":
return chr9;
break;
case "flag":
return chr10;
break;
case "slash":
return chr11;
break;
case "backslash":
return chr12;
break;
case "nw":
return chr13;
break;
case "ne":
return chr14;
break;
case "block":
return chr15;
break;
case "brick":
return chr16;
break;
case "equal":
return chr17;
break;
case "point":
return chr18;
break;
case "cornernw":
return chr19;
break;
case "cornerne":
return chr20;
break;
case "cornersw":
return chr21;
break;
case "cornerse":
return chr22;
break;
case "upbar":
return chr23;
break;
case "downbar":
return chr24;
break;
case "rightbar":
return chr25;
break;
case "leftbar":
return chr26;
break;
case "clover":
return chr27;
break;
case "widet":
return chr28;
break;
case ":":
return chr30;
break;
case "diamond":
return chr31;
break;
default:
return chrnull;
break;

}
}
function put(chrcode,cx,cy){
var chrctx=new Array(0,8,5);
putc(chrcode,chrctx,cx*8,cy*5);
}
function puth(chrcode,cx,cy){
var chrctx=new Array(1,8,5);
putc(chrcode,chrctx,cx*8,cy*5);
}
function putl(chrcode,cx,cy){
var chrctx=new Array(2,8,5);
putc(chrcode,chrctx,cx*8,cy*5);
}