var password=prompt('Please enter your password')
var validatepassword=prompt('Please enter Re-enter your password')
9
if(password==""){
    alert('Please enter your password')
    
    }
    
else if(password==validatepassword){
    alert('Correct! The password you entered matches the original password.')
}
else{
    alert('Incorrect Password!')
}
