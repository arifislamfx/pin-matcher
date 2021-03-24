// 4 digit number generate
function generate__btn () {
    const generate__input = document.getElementById('generate__input');
    const generate__input__num = parseInt(generate__input.value);
    const random__Num = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generate__input').value = random__Num;
}

// Button Section
function display(user__input) {
  if (user__input === 'C') {
    document.getElementById('user__display').value = '';
    swal ("..Empty..")
  }
 else {
   document.getElementById('user__display').value += user__input;
 }
}

// Backspace 
function backspace() {
  let input__value=document.getElementById("user__display").value;
 document.getElementById("user__display").value=input__value.substring(0,input__value.length-1);
if (input__value == ''){
  document.getElementById('user__display').value = "";
  swal("..nothing is left..")
}
}

// Submit Section 
function submit() {
  let display__number = document.getElementById('user__display').value;
  let random__number = document.getElementById('generate__input').value;

  if((display__number == '') || (random__number == '')) {
    swal ("Empty!", "please check random number input field")
  } 
  else if(display__number == random__number) {
    notify('match', 'block');
    notify('notMatch', 'none');
    clear__input('user__display');
    clear__input('generate__input');
  }
  else {
    notify('match', 'none');
    notify('notMatch', 'block');
    action__left();
  }
}

// Action Button
function action__left() {
  let update__num = 0;
let action__left = document.getElementById("action__left__num").innerText;
let convert__num = parseInt(action__left);
 update__num = convert__num - 1;
 document.getElementById("action__left").style.display = "block";

 if (convert__num > 1) {
   document.getElementById("action__left__num").innerText = update__num;
    clear__input('user__display');
 }
 else {
   swal ("Opps!", "you have already try 3 times");
   document.getElementById("action__left").style.display = 'none';
   notify('match', 'none');
    notify('notMatch', 'none');
    
    // disabled submit button:
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.background = '#ccc';
    document.getElementById("submit").style.color = '#666';

    clear__input('user__display');
    clear__input('generate__input');
    
 }

}


// Notify Section
function notify(id, value) {
  document.getElementById(id).style.display = value;
}

// clear input num/data
function clear__input(id) {
  document.getElementById(id).value = "";
}

