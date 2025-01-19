gsap.to("#box1",{
    x:30,
    duration:1,
    borderRadius:"50%",
   // repeat:-1,
    //yoyo:true,

})
gsap.to("#box2",{
    x:30,
    duration:1.5,
    delay:1,
    borderRadius:"50%",
    //repeat:-1,
    //yoyo:true,

})
gsap.to("#box3",{
    x:30,
    duration:2,
    delay:2,
    borderRadius:"50%",
    //repeat:-1,
    //yoyo:true,
})
var tl=gsap.timeline()
tl.from("h1",{
    y:-30,
    opacity:0,
    duration:2,
    
    
})

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.35,
})
gsap.to("#soil1",{
    x:5,
    delay:2,
    duration:1,
    //repeat:-1,
    //yoyo:true
});
gsap.to("#tools1",{
    x:5,
    delay:2,
    duration:1,
   // repeat:-1,
   // yoyo:true
});
gsap.to("#seeds1",{
    x:5,
    delay:2,
    duration:1,
    //repeat:-1,
    //yoyo:true
    
});
document.getElementById("myBtn1").addEventListener("click",function(){
    let text=document.getElementById("text1");
    if(text.style.display==="none"){
        text.style.display="block";
    }else{
        text.style.display="none";
    }



});
document.getElementById("myBtn2").addEventListener("click",function(){
    let text2=document.getElementById("text2");
    if(text2.style.display==="none"){
        text2.style.display="block";
    }else{
        text2.style.display="none";
    }
});
document.getElementById("myBtn3").addEventListener("click",function(){
    let text2=document.getElementById("text3");
    if(text3.style.display==="none"){
        text3.style.display="block";
    }else{
        text3.style.display="none";
}
});
gsap.to("#one",{
    y:-20,
    delay:1,
    duration:1,
});
gsap.to("#two",{
    y:-20,
    delay:2.5,
    duration:1,
});
gsap.to("#three",{
    y:-20,
    delay:3.8,
    duration:1,
   
});



function breaktext(){
var h1=document.querySelector("h1")
var h1txt=h1.textContent;
let splittedtxt=h1txt.split("  ");
var anything=""
splittedtxt.forEach(function(elem) {
    anything+=`<span>${elem}</span>`
})
h1.innerHTML=anything;
};
breaktext()
gsap.from("h1 span",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:-0.7
});
