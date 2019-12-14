var number=[3,7,9];
var guessnumber=Number(prompt('Guess a  Secret Number '))
if(guessnumber==number[0] || guessnumber==number[1] || guessnumber==number[2]){
    alert('Bingo! Correct answer')
}
else{
    alert("Close Enough to the correct answer")
}