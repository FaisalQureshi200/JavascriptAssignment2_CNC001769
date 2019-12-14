var operation=prompt('Calculator \n What Mathematical operation would you like to perform from following\n  +      -     *     /      %')

if(operation=='+'){
    alert('Ok You Want to perfrom Addition')
    var a=Number(prompt('Enter first Number'))
    var b=Number(prompt('Enter Second Number'))
    var c=a+b;
    alert('Your Answer is: ' +c)
}
else if(operation=='-'){
    alert('Ok You Want to perfrom Subtraction')
    var a=Number(prompt('Enter first Number'))
    var b=Number(prompt('Enter Second Number'))
    var c=a-b;
    alert('Your Answer is: ' +c)
}

else if(operation=='*'){
    alert('Ok You Want to perfrom Multiplication')
    var a=Number(prompt('Enter first Number'))
    var b=Number(prompt('Enter Second Number'))
    var c=a*b;
    alert('Your Answer is: ' +c)
}
else if(operation=='/'){
    alert('Ok You Want to perfrom Division')
    var a=Number(prompt('Enter first Number'))
    var b=Number(prompt('Enter Second Number'))
    var c=a/b;
    alert('Your Answer is: ' +c)
}
else if(operation=='%'){
    alert('Ok You Want to perfrom Modulas')
    var a=Number(prompt('Enter first Number'))
    var b=Number(prompt('Enter Second Number'))
    var c=a%b;
    alert('Your Answer is: ' +c)
}
else {
    alert('Error! you enter an incorrect operator')
}





