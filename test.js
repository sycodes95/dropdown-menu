const title = document.querySelector('.title');
const dropDownMenu = document.querySelector('.dropDownMenu');
dropDownMenu.style.visibility = 'hidden'

const id = document.getElementById('id');




title.addEventListener('click', ()=>{
    console.log(title)
    
    if (dropDownMenu.style.visibility == 'hidden'){
        dropDownMenu.style.visibility = 'visible';
        dropDownMenu.style.opacity = '1';
        dropDownMenu.style.transform = 'translateY(0px)'
        

    
    } else if (dropDownMenu.style.visibility == 'visible'){
        dropDownMenu.style.visibility = 'hidden';
        dropDownMenu.style.opacity = '0';
        dropDownMenu.style.transform = 'translateY(-10px)'
        
    }
    
});

    
    
        



