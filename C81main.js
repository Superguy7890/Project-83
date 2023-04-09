canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d");
MouseEvent=" ";
ox=" ";
oy=" ";
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    c=document.getElementById("clr").value;
    l=document.getElementById("wd").value;
    MouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    MouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    MouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    nx=e.clientX-canvas.offsetLeft;
    ny=e.clientY-canvas.offsetTop;
    if(MouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=c;
        ctx.lineWidth=l;
        ctx.moveTo(ox,oy)
        ctx.lineTo(nx,ny)
        ctx.stroke(); 
    }
    ox=nx;
    oy=ny;
}
newwidth = screen.width -60;
newheight = screen.height - 300;
if(screen.width < 992)
{
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").height=newheight
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){c=document.getElementById("clr").value;
l=document.getElementById("wd").value;
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    nx=e.touches[0].clientX-canvas.offsetLeft;
    ny=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=c;
        ctx.lineWidth=l;
        ctx.moveTo(ox,oy)
        ctx.lineTo(nx,ny)
        ctx.stroke(); 
        ox=nx;
        oy=ny;
    }