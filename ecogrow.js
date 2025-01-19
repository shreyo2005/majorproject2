gsap.to("#box1",{
    x:30,
    duration:1,
    borderRadius:"50%",
   // repeat:-1,
    //yoyo:true,

})
gsap.to("#box2",{
    x:30,
    duration:1,
    delay:1,
    borderRadius:"50%",
    //repeat:-1,
    //yoyo:true,

})
gsap.to("#box3",{
    x:30,
    duration:1,
    delay:2,
    borderRadius:"50%",
    //repeat:-1,
    //yoyo:true,
})
var tl=gsap.timeline()
tl.from("h1",{
    y:-30,
    opacity:0,
    duration:1,
    
    
})

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.35,
})
