function fname(){
    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value
    let adress=document.getElementById('adress').value
    let comment=document.getElementById('comment').value
    let email=document.getElementById('myemail').value
    if (firstname ==''){
   alert('the first name is empty')}
   else if (lastname==''){
    alert('the last name is empty')}
  else if (adress==''){
    alert('the adress is empty')}
    else if (email==''){
      alert('the email is empty')} 
    else if (comment==''){
      alert('comment is empty')} 
      

}

/* function lname(){
    let lastname=document.getElementById('lastname').value
    if (lastname==''){
    alert('the last name is empty')
  }
}

function adress(){
    let adress=document.getElementById('adress').value
    if (adress==''){
    alert('the adress is empty')
  }
}

function comment(){
    let comment=document.getElementById('comment').value
    if (comment==''){
    alert('comment is empty')
  }
}
 */


function myFunction() {
    var x = document.getElementById("myemail").pattern;
    document.getElementById("demo").innerHTML = x;
  }

  
  function checkPassword() {
    let pass = document.getElementById('inputPassword4').value;
    let pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let message = document.getElementById('inputPassword4');
    console.log(pass)
    let resulat = pattern.test(pass);
    console.log()
    console.log(resulat)
    if (resulat==false)
    alert ("The password must be a combination of charatacters,numbers and at least a capital letter");
    else 
    alert("ok")
}
  
