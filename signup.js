
    
      function func() {
        const email = document.getElementById('email').value;  // Get the email value
        const emailError1 = document.getElementById('email_error1');
        const emailError2 = document.getElementById('email_error2');  // Get the error message element
        const password = document.getElementById('password').value;  // Get the email value
        const passError1 = document.getElementById('pass_error1');  // Get the error message element
        const passError2 = document.getElementById('pass_error2'); 
        if (email === "" && password==="" ) {
          // If email is empty, display the error message
          emailError1.style.display = "block";  // Show the error message by setting display to "block"
          passError1.style.display="block";
        } 
        else if(email === ""){
            emailError1.style.display = "block"; }
        else if(password===""){
            passError1.style.display="block";
        } 
        else if(email==="admin@gmail.com" && password==="12345"){
            emailError1.style.display = "none";  
          window.location.href="home.html";
        }
           else if(email==="admin@gmail.com" && password!="12345"){
            passError2.style.display="block";
        }
        else if(email!="admin@gmail.com" && password==="12345"){
            emailError2.style.display = "block"; 
        }
        else { 
            emailError2.style.display = "block"; 
            passError2.style.display="block";
        }
      }
   