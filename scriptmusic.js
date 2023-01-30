document.querySelector("#hindinpunjabi").addEventListener("click",function(){
    document.querySelector(".popuphindi").style.display = "block";
});

var audio = document.querySelector(".audio");
document.querySelector("#English").addEventListener("click",function(){
    audio.play();

})

document.querySelector("#hindinpunjabi").addEventListener("click",function(){
    audio.play();
})
document.querySelector("#hindinpunjabi").addEventListener("click",function(){
    audio.play();
})
document.querySelector(".ri-close-fill").addEventListener("click",function(){
    audio.play();
})
document.querySelector("#io").addEventListener("click",function(){
    audio.play();
})

document.querySelector(".ri-close-fill").addEventListener("click",function(){
    document.querySelector(".popuphindi").style.display = "none";
    document.querySelector(".ri-close-fill").style.cursor = "pointer";
});   

document.querySelector("#English").addEventListener("click",function(){
    document.querySelector(".popupenglish").style.display = "flex";
});    

document.querySelector("#io").addEventListener("click",function(){
    document.querySelector(".popupenglish").style.display = "none";
    document.querySelector("#io").style.cursor = "pointer";
});