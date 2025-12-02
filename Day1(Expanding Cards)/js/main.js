var bigContainer=document.querySelector('.container');
bigContainer.addEventListener('click',function(e){
    if(e.target.tagName != 'SECTION' )
    {
        document.querySelector('.active').classList.remove('active')
        e.target.tagName == 'DIV'?e.target.classList.add('active'):e.target.parentElement.classList.add('active')
    }
})