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
  else if (user__input == "BS") {

    let display__value = document.getElementById('user__display');
    if( document.getElementById('user__display').value == "")
    swal ("Input field is empty!")
    
  }
 else if(user__input == 'BS') {
    document.getElementById('user__display').value = display__value.value.substring(0,display__value.value.length-1);
 }
 else {
   document.getElementById('user__display').value += user__input;
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

