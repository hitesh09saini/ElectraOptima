

function signup() {
   
    let email = document.getElementById('email').value;
    let name= document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
   
    localStorage.setItem(name,pass);
    console.log("Sign up successful! You can now log in.");
    
    location.href='login.html';

}



function login(){
    
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;

   if(localStorage.getItem(name)== pass){

     console.log("login successful! ");
     location.href='unitConvertor.html';
   }
}

