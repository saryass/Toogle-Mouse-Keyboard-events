const oNoFBTN = document.getElementById('oNoFBTN');
const inputBTN = document.getElementById('inputBTN');
const opacityBTN = document.getElementById('opacityBTN');
const btnBox = document.getElementById('btnBox')

// *********************************************************************
//         Adding an event listener for oNoFBTN
// *********************************************************************
let saryass = false;  // used for oNoF button toggling

oNoFBTN.addEventListener('click', e =>{
  saryass = !saryass; // Toggle/switch the state

  if (saryass) {      //write the changes you wanna see after the first click.
    // Changes when the button is toggled ON
    oNoFBTN.textContent = 'Turn ON';
    inputBTN.style.backgroundColor = 'black';
    opacityBTN.style.backgroundColor = 'black';
    btnBox.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'black';

  } else {                      // write the change u wanna see after second click, 99.99% you want to getting back to the original state. ;)
    // Revert changes when the button is toggled OFF
    oNoFBTN.textContent = 'Turn Off';
    oNoFBTN.style.backgroundColor = '';  
    inputBTN.style.backgroundColor = ''; 
    opacityBTN.style.backgroundColor='';
    btnBox.style.backgroundColor = ''; 
    document.body.style.backgroundColor = '';  
  }
});
// *********************************************************************
//         Creating an input element t
// *********************************************************************
//STEP1
const newInput=document.createElement('input');

//STEP2
newInput.id='newInput';
newInput.type='number';
newInput.style.height='40px'
newInput.style.position='absolute';
newInput.style.top='50px';
newInput.placeholder='0-9 except 5 please';
newInput.style.textAlign='center'

//STEP3
// document.getElementsByTagName('body')[0].append(newInput);

// *********************************************************************
//         Adding an event listener for inputBTN
// *********************************************************************
let saryass2 = false;

inputBTN.addEventListener('click', e=>{
  saryass2 = !saryass2;

  if(saryass2) {    //write the changes you wanna see after the first click.
    document.getElementsByTagName('body')[0].append(newInput);
  }
  else {   // write the change u wanna see after second click, 99.99% you want to getting back to the original state. ;) but here i want to remover the newImput at the second click ;)
    newInput.remove();  
    
  }
})
// *********************************************************************
//         Adding  2nd event listener for newInput
// *********************************************************************
newInput.addEventListener('keydown', e=> {
      
  if(e.key ==='Enter'){   //we specify the key which is 'Enter' in this case ;)
  window.alert(`Your input was ${newInput.value}`);
  newInput.remove();

  }
  else if (e.key ==='5') {
    window.alert("Sorry, number 5 is not allowed");
    e.preventDefault();  //to not allow user type number 5
  }

})

















