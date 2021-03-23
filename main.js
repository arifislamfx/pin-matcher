// 4 digit number generate
function generate__btn () {
    const generate__input = document.getElementById('generate__input');
    const generate__input__num = parseInt(generate__input.value);
    const random__Num = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generate__input').value = random__Num;
}

// get screen number
let screen = document.getElementById('box');
let buttons = document.getElementsByClassName('button');
 let screenValue = '';
 for (item of buttons) {
   item.addEventListener('click', (e) => {
     buttonText = e.target.innerText;
     screen.value += buttonText;
     console.log('button text is', buttonText);
    if (buttonText == 'C') {
            screen.value = '';
     }
     else if (buttonText == 'CE') {
       screen.value = ''; 
     }
   })
 }

//  Submit Button
const btn = document.getElementById('submitBtn');
btn.addEventListener('click', function(e) {
 const mainPage = document.getElementById('mainPage');
 mainPage.style.display = "none";
 const notify = document.getElementById("notify__sec");
 notify.style.display = "block";
 
});



