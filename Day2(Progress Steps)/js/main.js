var prevBtn=document.getElementById('prevbtn')
var nextBtn=document.getElementById('nextbtn')
var circles=document.querySelectorAll('.circle')
var progressElement=document.querySelector('.progress')
var counter=0
var progressWidth=0
nextBtn.addEventListener('click',function(e){
if(counter <(circles.length-1))
{
    counter++
    display(counter,1); 
}

if(counter == (circles.length-1) )
{
    if(e.target.classList.contains('activebtn'))
    {
        e.target.classList.remove('activebtn')
    }
}

})
prevBtn.addEventListener('click',function(e){
if(counter !=0)
{
    display(counter,-1); 
    counter--
}

if(counter == 0)
{
    if(e.target.classList.contains('activebtn'))
    {
        e.target.classList.remove('activebtn')
    }
}


})

function display(index,operation){
switch (operation) {
case 1 :
    circles[index].classList.add('activelevel')
    progressWidth = index*(100/(circles.length-1))
    progressElement.style.width=progressWidth+'%'
    break;
case -1:
        
         circles[index].classList.remove('activelevel')
         progressWidth = (index-1)*(100/(circles.length-1))
         progressElement.style.width=progressWidth+'%'
    
}

if(nextBtn.classList.contains('activebtn') == false)
    {
        nextBtn.classList.add('activebtn')
    }
if(prevBtn.classList.contains('activebtn') == false)
    {
        prevBtn.classList.add('activebtn')
    } 

}