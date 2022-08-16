window.onload = wowk
function wowk (){
    alert('Hello in my contact form')
    alert('You have two methods to contact me')
    alert('First is to fill these fields with its inforamtion\nand then click "SEND MESSAGE" button')
    alert('The second method is to contact me on facebook by clicking face book icon under the "SEND MESSAGE" button')
}

let inpname = document.getElementById('name');
let inpmail = document.getElementById('mail');
let inpmess = document.getElementById('message');
let send = document.getElementById('send');

send.addEventListener('click',wow);

function wow(){
    let names= inpname.value;
    let mails = inpmail.value;
    let messs = inpmess.value;
    console.log(names)
    emailjs.send("service_3xgkshm","template_ui507lq",{
        name: names,
        mail: mails,
        about: messs,
        });
    alert('You sent this to me I will reply to you')

}
