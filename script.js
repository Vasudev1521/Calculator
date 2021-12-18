let screen = document.getElementById('screen');
let buttons = Array.from(document.querySelectorAll('button'));


buttons.map( button => {

    button.addEventListener('click', (e) =>{
   switch(e.target.innerText){
       case 'C':
           screen.value = '';
        break;
       case'←':
           screen.value = screen.value.slice(0 , -1);
       break; 
       case '=':
           screen.value = eval(screen.value)
           break;
       default:
           screen.value += e.target.innerText;
   }


    });
});

