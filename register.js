function func() {

    const first_name = document.getElementById('F-N').value;
    const LAST_NAME = document.getElementById('L-N').value; 
    const EMAIL = document.getElementById('EMAIL').value;
    const NEW_PASS = document.getElementById('N-P').value;
    const SAME_PASS = document.getElementById('L-N').value;
    const FN_ERR = document.getElementById('pass_error1');
    const LN_ERRR = document.getElementById('pass_error2');  
    const EMAIL_ERR = document.getElementById('pass_error3'); 
    const NPASS_ERR = document.getElementById('pass_error4'); 
    const SPASS_ERR = document.getElementById('pass_error5'); 
    if (first_name === "") {
        FN_ERR.style.display = "block"; 

    } else {
        FN_ERR.style.display = "none"; 
    }
    
    if (LAST_NAME === "") {
        LN_ERRR.style.display = "block"; 
    } else {
        LN_ERRR.style.display = "none"; 
    }
    
    if (EMAIL === "") {
        EMAIL_ERR.style.display = "block"; 
    } else {
        EMAIL_ERR.style.display = "none";
    }
    
    if (NEW_PASS === "") {
        NPASS_ERR.style.display = "block"; 
    } else {
        NPASS_ERR.style.display = "none";
    
    if (SAME_PASS === "") {
        SPASS_ERR.style.display = "block"; 
    } else {
        SPASS_ERR.style.display = "none"; 
    }
  
    if (first_name !== "" && LAST_NAME !== "" && EMAIL !== "" && NEW_PASS !== "" && SAME_PASS !== "") {
        window.location.href = "home.html"; 
    
  
}
    }}