window.onscroll=function(){
let x = 44;
if (x<window.scrollY) {
    document.querySelector(".head").style="background-color : #6e716e;"
} else {
    document.querySelector(".head").style="background-color : transparent"
}
}



document.querySelector(".body0 .right .bot .r").onclick =function() {

    document.querySelector(".body0 .right .bot .r").style="display: none;"
    document.querySelector(".body0 .right .bot .f").style="display: none;"
    document.querySelector(".body0 .right .bot .fclick").style="display: block;"
    
    document.querySelector(".one").style=" transform: translate(60vw, 0);  transition: .6s;"
    document.querySelector(".two").style=" transform: translate(60vw, 0);  transition: .6s;"
    document.querySelector(".three").style=" transform: translate(60vw, 0);  transition: .6s;"
}




document.querySelector(".body0 .right .bot .f").onclick =function() {
    document.querySelector(".body0 .right .bot .r").style="display: none;"
    document.querySelector(".body0 .right .bot .f").style="display: none;"
    document.querySelector(".body0 .right .bot .rclick").style="display: block;"
    
    document.querySelector(".one").style=" transform: translate(-64vw, 0);  transition: .6s;"
    document.querySelector(".two").style=" transform: translate(-64vw, 0);  transition: .6s;"
    document.querySelector(".three").style=" transform: translate(-64vw, 0);  transition: .6s;"
}

document.querySelector(".body0 .right .bot .fclick").onclick =function() {
    document.querySelector(".body0 .right .bot .r").style="display: block;"
    document.querySelector(".body0 .right .bot .f").style="display: block;"
    document.querySelector(".body0 .right .bot .fclick").style="display: none;"
    document.querySelector(".body0 .right .bot .rclick").style="display: none;"

    
    document.querySelector(".one").style=" transform: translate(-2vw, 0);  transition: .6s;"
    document.querySelector(".two").style=" transform: translate(-2vw, 0);  transition: .6s;"
    document.querySelector(".three").style=" transform: translate(-2vw, 0);  transition: .6s;"
}
document.querySelector(".body0 .right .bot .rclick").onclick =function() {
    document.querySelector(".body0 .right .bot .r").style="display: block;"
    document.querySelector(".body0 .right .bot .f").style="display: block;"
    document.querySelector(".body0 .right .bot .rclick").style="display: none;"
    document.querySelector(".body0 .right .bot .fclick").style="display: none;"
    
    document.querySelector(".one").style=" transform: translate(-2vw, 0);  transition: .6s;"
    document.querySelector(".two").style=" transform: translate(-2vw, 0);  transition: .6s;"
    document.querySelector(".three").style=" transform: translate(-2vw, 0);  transition: .6s;"
}


document.querySelector(".body1 .tit button").onclick =function(){
    
document.querySelector(".body1 .bott").style="visibility: visible;  transform: translate(0, 0vw); transition: 1s;"
document.querySelector(".body1 .bott1").style="visibility: visible;  transform: translate(0, 0vw); transition: 1s;"
}
