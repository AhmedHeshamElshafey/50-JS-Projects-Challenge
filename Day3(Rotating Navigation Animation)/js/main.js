
var iconsCircle=document.querySelector('.iconcircle')
var bigContainer=document.querySelector('.bigcontainer')
var navBar=document.getElementsByTagName('nav')
iconsCircle.addEventListener('click',function(e){
    if (e.target.tagName== 'I')
    {
        e.currentTarget.classList.toggle('rotate')
        bigContainer.classList.toggle('openNav')
        navBar[0].classList.toggle('rotateNav')
    }
})