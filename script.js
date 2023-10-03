let wellcome = document.querySelector('button');
wellcome.addEventListener('click',showMsg);
function showMsg(){
   let name = prompt('Enter your name ');
   wellcome.textContent ='here is your loved  name='+ name;
}